import React, { useState } from 'react';

const qSOFAInfectious = () => {
  const [respRate, setRespRate] = useState(false);       // RR ≥ 22/min
  const [alteredMentation, setAlteredMentation] = useState(false); // GCS < 15
  const [systolicBP, setSystolicBP] = useState(false);    // SBP ≤ 100 mmHg
  const [score, setScore] = useState(null);

  const calculateScore = () => {
    const total = (respRate ? 1 : 0) + (alteredMentation ? 1 : 0) + (systolicBP ? 1 : 0);
    setScore(total);
  };

  const interpretation = () => {
    if (score === 0) return "Low risk of poor outcome.";
    if (score === 1) return "Intermediate risk. Monitor closely.";
    if (score >= 2) return "High risk of sepsis. Consider urgent evaluation and treatment.";
    return "";
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">qSOFA Score (Infectious Diseases)</h2>

      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={respRate}
            onChange={() => setRespRate(!respRate)}
            className="mr-2"
          />
          Respiratory rate ≥ 22 breaths/min
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={alteredMentation}
            onChange={() => setAlteredMentation(!alteredMentation)}
            className="mr-2"
          />
          Altered mentation (GCS &lt; 15)
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={systolicBP}
            onChange={() => setSystolicBP(!systolicBP)}
            className="mr-2"
          />
          Systolic BP ≤ 100 mmHg
        </label>
      </div>

      <button
        onClick={calculateScore}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Calculate qSOFA
      </button>

      {score !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <p><strong>Total Score:</strong> {score} / 3</p>
          <p><strong>Interpretation:</strong> {interpretation()}</p>
        </div>
      )}
    </div>
  );
};

export default qSOFAInfectious;