import React, { useState } from "react";

const ASCVDCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [race, setRace] = useState("white");
  const [totalChol, setTotalChol] = useState("");
  const [hdl, setHDL] = useState("");
  const [systolicBP, setSystolicBP] = useState("");
  const [onMeds, setOnMeds] = useState(false);
  const [diabetic, setDiabetic] = useState(false);
  const [smoker, setSmoker] = useState(false);
  const [risk, setRisk] = useState(null);

  const calculateASCVD = () => {
    if (!age || !totalChol || !hdl || !systolicBP) {
      setRisk("Please fill all required fields");
      return;
    }

    const lnAge = Math.log(age);
    const lnTotalChol = Math.log(totalChol);
    const lnHDL = Math.log(hdl);
    const lnSBP = Math.log(systolicBP);

    // Coefficients for White Males
    const coeffs = {
      male: {
        white: {
          age: 12.344,
          chol: 11.853,
          hdl: -7.99,
          sbp_treated: 1.797,
          sbp_untreated: 1.764,
          smoker: 7.837,
          diabetes: 0.658,
          baselineSurvival: 0.9144,
          meanCoeff: 61.18,
        },
        black: {
          // Coeffs for black males (not implemented here)
        },
      },
      female: {
        white: {
          age: -29.799,
          chol: 13.54,
          hdl: -13.578,
          sbp_treated: 2.019,
          sbp_untreated: 1.957,
          smoker: 7.574,
          diabetes: 0.661,
          baselineSurvival: 0.9665,
          meanCoeff: -29.18,
        },
        black: {
          // Coeffs for black females (not implemented here)
        },
      },
    };

    const c = coeffs[gender][race];
    const sbpCoeff = onMeds ? c.sbp_treated : c.sbp_untreated;

    const sum =
      lnAge * c.age +
      lnTotalChol * c.chol +
      lnHDL * c.hdl +
      lnSBP * sbpCoeff +
      (smoker ? c.smoker : 0) +
      (diabetic ? c.diabetes : 0);

    const risk =
      1 - Math.pow(c.baselineSurvival, Math.exp(sum - c.meanCoeff));

    setRisk(`${(risk * 100).toFixed(1)}%`);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">ASCVD 10-Year Risk Estimator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Age"
          className="border p-2 rounded"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select
          className="border p-2 rounded"
          value={race}
          onChange={(e) => setRace(e.target.value)}
        >
          <option value="white">White</option>
          <option value="black" disabled>Black (not yet implemented)</option>
        </select>
        <input
          type="number"
          placeholder="Total Cholesterol (mg/dL)"
          className="border p-2 rounded"
          value={totalChol}
          onChange={(e) => setTotalChol(e.target.value)}
        />
        <input
          type="number"
          placeholder="HDL (mg/dL)"
          className="border p-2 rounded"
          value={hdl}
          onChange={(e) => setHDL(e.target.value)}
        />
        <input
          type="number"
          placeholder="Systolic BP"
          className="border p-2 rounded"
          value={systolicBP}
          onChange={(e) => setSystolicBP(e.target.value)}
        />

        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={onMeds} onChange={() => setOnMeds(!onMeds)} />
          <span>On BP Meds</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={smoker} onChange={() => setSmoker(!smoker)} />
          <span>Smoker</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={diabetic} onChange={() => setDiabetic(!diabetic)} />
          <span>Diabetic</span>
        </label>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={calculateASCVD}
      >
        Calculate ASCVD Risk
      </button>

      {risk && (
        <div className="mt-4 bg-blue-100 p-4 rounded shadow">
          <p><strong>10-Year ASCVD Risk:</strong> {risk}</p>
        </div>
      )}
    </div>
  );
};

export default ASCVDCalculator;