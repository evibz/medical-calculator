import React, { useState } from "react";

const ApacheII = () => {
  const [inputs, setInputs] = useState({
    age: "",
    temperature: "",
    meanArterialPressure: "",
    heartRate: "",
    respiratoryRate: "",
    oxygenation: "",
    ph: "",
    sodium: "",
    potassium: "",
    creatinine: "",
    hematocrit: "",
    whiteCellCount: "",
    gcs: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // NOTE: Simplified scoring logic
  const calculateScore = () => {
    const {
      age,
      temperature,
      meanArterialPressure,
      heartRate,
      respiratoryRate,
      oxygenation,
      ph,
      sodium,
      potassium,
      creatinine,
      hematocrit,
      whiteCellCount,
      gcs,
    } = inputs;

    let score = 0;

    // GCS contribution
    const gcsScore = 15 - Number(gcs || 0);
    score += gcsScore;

    // Age points (simplified)
    if (age >= 75) score += 6;
    else if (age >= 65) score += 5;
    else if (age >= 55) score += 3;
    else if (age >= 45) score += 2;

    // Add simplified physiological points (example)
    if (temperature < 36 || temperature > 39) score += 2;
    if (heartRate > 140 || heartRate < 40) score += 4;
    if (meanArterialPressure < 70) score += 2;
    if (ph < 7.3) score += 2;

    return score;
  };

  const score = calculateScore();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">APACHE II Score</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {Object.keys(inputs).map((key) => (
          <div key={key}>
            <label className="block capitalize mb-1">{key.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type="number"
              name={key}
              value={inputs[key]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded shadow">
        <p><strong>Total Score:</strong> {score}</p>
        <p className="mt-2 text-sm text-gray-600">Higher scores indicate greater severity of illness and higher mortality risk.</p>
      </div>
    </div>
  );
};

export default ApacheII;
