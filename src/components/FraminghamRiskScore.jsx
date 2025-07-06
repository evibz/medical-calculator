import React, { useState } from "react";

const FraminghamRiskScore = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [totalChol, setTotalChol] = useState("");
  const [hdl, setHDL] = useState("");
  const [systolicBP, setSystolicBP] = useState("");
  const [onMeds, setOnMeds] = useState(false);
  const [smoker, setSmoker] = useState(false);
  const [diabetic, setDiabetic] = useState(false);
  const [risk, setRisk] = useState(null);

  const calculateRisk = () => {
    const agePts = getAgePoints(age, gender);
    const cholPts = getCholPoints(totalChol, age, gender);
    const hdlPts = getHDLPoints(hdl);
    const bpPts = getBPPoints(systolicBP, onMeds, gender);
    const smokePts = smoker ? (gender === "male" ? 4 : 3) : 0;
    const diabPts = diabetic ? 3 : 0;

    const totalPoints = agePts + cholPts + hdlPts + bpPts + smokePts + diabPts;
    const riskPercent = getRiskPercentage(totalPoints, gender);

    setRisk(riskPercent);
  };

  const getAgePoints = (age, gender) => {
    if (gender === "male") {
      if (age < 35) return -1;
      if (age <= 39) return 0;
      if (age <= 44) return 1;
      if (age <= 49) return 2;
      if (age <= 54) return 3;
      if (age <= 59) return 4;
      if (age <= 64) return 5;
      if (age <= 69) return 6;
      if (age <= 74) return 7;
      return 8;
    } else {
      if (age < 35) return -9;
      if (age <= 39) return -4;
      if (age <= 44) return 0;
      if (age <= 49) return 3;
      if (age <= 54) return 6;
      if (age <= 59) return 8;
      if (age <= 64) return 10;
      if (age <= 69) return 12;
      return 14;
    }
  };

  const getCholPoints = (chol, age, gender) => {
    if (chol === "") return 0;
    if (gender === "male") {
      if (chol < 160) return 0;
      if (chol < 200) return 1;
      if (chol < 240) return 2;
      if (chol < 280) return 3;
      return 4;
    } else {
      if (chol < 160) return 0;
      if (chol < 200) return 1;
      if (chol < 240) return 3;
      if (chol < 280) return 4;
      return 5;
    }
  };

  const getHDLPoints = (hdl) => {
    if (hdl >= 60) return -1;
    if (hdl >= 50) return 0;
    if (hdl >= 40) return 1;
    return 2;
  };

  const getBPPoints = (bp, meds, gender) => {
    if (bp === "") return 0;
    const thresholds = gender === "male"
      ? meds ? [120, 130, 140, 160] : [120, 130, 140, 160]
      : meds ? [120, 130, 140, 160] : [120, 130, 140, 160];
    const scores = meds ? [0, 1, 2, 2, 3] : [0, 1, 1, 2, 3];
    if (bp < thresholds[0]) return scores[0];
    if (bp < thresholds[1]) return scores[1];
    if (bp < thresholds[2]) return scores[2];
    if (bp < thresholds[3]) return scores[3];
    return scores[4];
  };

  const getRiskPercentage = (points, gender) => {
    const maleChart = {
      0: "<1%", 1: "<1%", 2: "<1%", 3: "1%", 4: "1%", 5: "2%", 6: "2%",
      7: "3%", 8: "4%", 9: "5%", 10: "6%", 11: "8%", 12: "10%", 13: "12%",
      14: "16%", 15: "20%", 16: "25%", 17: "30%", 18: "≥30%"
    };
    const femaleChart = {
      0: "<1%", 1: "<1%", 2: "<1%", 3: "1%", 4: "1%", 5: "2%", 6: "2%",
      7: "3%", 8: "4%", 9: "5%", 10: "6%", 11: "8%", 12: "11%", 13: "14%",
      14: "17%", 15: "22%", 16: "27%", 17: "≥30%", 18: "≥30%"
    };
    return gender === "male"
      ? maleChart[points] || "≥30%"
      : femaleChart[points] || "≥30%";
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Framingham Risk Score</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="number" className="border p-2 rounded" placeholder="Age"
          value={age} onChange={(e) => setAge(e.target.value)} />
        <select className="border p-2 rounded" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="number" className="border p-2 rounded" placeholder="Total Cholesterol (mg/dL)"
          value={totalChol} onChange={(e) => setTotalChol(e.target.value)} />
        <input type="number" className="border p-2 rounded" placeholder="HDL (mg/dL)"
          value={hdl} onChange={(e) => setHDL(e.target.value)} />
        <input type="number" className="border p-2 rounded" placeholder="Systolic BP"
          value={systolicBP} onChange={(e) => setSystolicBP(e.target.value)} />

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

      <button onClick={calculateRisk}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Calculate Risk
      </button>

      {risk && (
        <div className="mt-4 bg-blue-100 p-4 rounded shadow">
          <p><strong>10-year CHD Risk:</strong> {risk}</p>
        </div>
      )}
    </div>
  );
};

export default FraminghamRiskScore;