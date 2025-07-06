import React, { useState } from "react";

const criteria = [
  { label: "Seizure", points: 8 },
  { label: "Psychosis", points: 8 },
  { label: "Organic Brain Syndrome", points: 8 },
  { label: "Visual Disturbance", points: 8 },
  { label: "Cranial Nerve Disorder", points: 8 },
  { label: "Lupus Headache", points: 8 },
  { label: "CVA (Stroke)", points: 8 },
  { label: "Vasculitis", points: 8 },
  { label: "Arthritis", points: 4 },
  { label: "Myositis", points: 4 },
  { label: "Urinary Casts", points: 4 },
  { label: "Hematuria", points: 4 },
  { label: "Proteinuria", points: 4 },
  { label: "Pyuria", points: 4 },
  { label: "Rash", points: 2 },
  { label: "Alopecia", points: 2 },
  { label: "Mucosal Ulcers", points: 2 },
  { label: "Pleurisy", points: 2 },
  { label: "Pericarditis", points: 2 },
  { label: "Low Complement", points: 2 },
  { label: "Increased DNA binding", points: 2 },
  { label: "Fever", points: 1 },
  { label: "Thrombocytopenia", points: 1 },
  { label: "Leukopenia", points: 1 },
];

const SLEDAICalculator = () => {
  const [selected, setSelected] = useState({});
  const [totalScore, setTotalScore] = useState(null);

  const toggleCriterion = (label) => {
    setSelected((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const calculateScore = () => {
    let score = 0;
    criteria.forEach((item) => {
      if (selected[item.label]) {
        score += item.points;
      }
    });
    setTotalScore(score);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">SLEDAI-2K Calculator</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {criteria.map((item) => (
          <label key={item.label} className="flex items-center">
            <input
              type="checkbox"
              checked={!!selected[item.label]}
              onChange={() => toggleCriterion(item.label)}
              className="mr-2"
            />
            {item.label} (+{item.points})
          </label>
        ))}
      </div>

      <button
        onClick={calculateScore}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Calculate SLEDAI Score
      </button>

      {totalScore !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <p><strong>Total SLEDAI Score:</strong> {totalScore}</p>
          <p>
            <strong>Interpretation:</strong>{" "}
            {totalScore === 0
              ? "No disease activity"
              : totalScore <= 5
              ? "Mild disease activity"
              : totalScore <= 10
              ? "Moderate disease activity"
              : "High disease activity"}
          </p>
        </div>
      )}
    </div>
  );
};

export default SLEDAICalculator;