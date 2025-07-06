import React, { useState } from "react";

const WellsScorePE = () => {
  const [score, setScore] = useState(0);

  const criteria = [
    { label: "Clinical signs and symptoms of DVT", points: 3 },
    { label: "Alternative diagnosis less likely than PE", points: 3 },
    { label: "Heart rate > 100 bpm", points: 1.5 },
    { label: "Immobilization/surgery in the past 4 weeks", points: 1.5 },
    { label: "Previous DVT/PE", points: 1.5 },
    { label: "Hemoptysis", points: 1 },
    { label: "Malignancy (on treatment, treated in past 6 months, or palliative)", points: 1 },
  ];

  const [checkedItems, setCheckedItems] = useState(new Array(criteria.length).fill(false));

  const handleCheckboxChange = (index) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
    const newScore = updated.reduce((total, item, i) => item ? total + criteria[i].points : total, 0);
    setScore(newScore);
  };

  const getInterpretation = () => {
    if (score > 6) return "High probability of PE";
    if (score > 2) return "Moderate probability of PE";
    return "Low probability of PE";
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Wells Score for Pulmonary Embolism</h2>
      {criteria.map((item, index) => (
        <div key={index} className="mb-2">
          <label>
            <input
              type="checkbox"
              checked={checkedItems[index]}
              onChange={() => handleCheckboxChange(index)}
              className="mr-2"
            />
            {item.label} (+{item.points})
          </label>
        </div>
      ))}

      <div className="mt-4 p-3 border rounded bg-gray-100">
        <p><strong>Total Score:</strong> {score}</p>
        <p><strong>Interpretation:</strong> {getInterpretation()}</p>
      </div>
    </div>
  );
};

export default WellsScorePE;
