import React, { useState } from "react";

const PEWS = () => {
  const [behavior, setBehavior] = useState(0);
  const [cardio, setCardio] = useState(0);
  const [resp, setResp] = useState(0);

  const totalScore = Number(behavior) + Number(cardio) + Number(resp);

  const interpretation = () => {
    if (totalScore === 0) return "Normal. Routine monitoring.";
    if (totalScore <= 2) return "Low risk. Increased observation recommended.";
    if (totalScore <= 4) return "Moderate risk. Consider escalation.";
    return "High risk! Immediate medical attention needed.";
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Pediatric Early Warning Score (PEWS)</h2>

      <div className="space-y-4">
        <div>
          <label className="block font-medium">Behavior:</label>
          <select
            value={behavior}
            onChange={(e) => setBehavior(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value={0}>0 - Normal / Sleeping</option>
            <option value={1}>1 - Irritable</option>
            <option value={2}>2 - Lethargic / Confused</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Cardiovascular:</label>
          <select
            value={cardio}
            onChange={(e) => setCardio(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value={0}>0 - Pink</option>
            <option value={1}>1 - Pale / Cool</option>
            <option value={2}>2 - Grey / Mottled</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Respiratory:</label>
          <select
            value={resp}
            onChange={(e) => setResp(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value={0}>0 - Normal</option>
            <option value={1}>1 - Mild distress / Tachypnea</option>
            <option value={2}>2 - Severe distress / Retractions</option>
          </select>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border rounded shadow">
        <p>
          <strong>PEWS Total Score:</strong> {totalScore}
        </p>
        <p className="mt-2">
          <strong>Interpretation:</strong> {interpretation()}
        </p>
      </div>
    </div>
  );
};

export default PEWS;