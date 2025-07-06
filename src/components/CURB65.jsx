import React, { useState } from 'react';

const CURB65 = () => {
  const [confusion, setConfusion] = useState(false);
  const [urea, setUrea] = useState(false); // BUN &gt; 7 mmol/L
  const [respRate, setRespRate] = useState(false); // ≥ 30 breaths/min
  const [bp, setBP] = useState(false); // SBP < 90 or DBP ≤ 60 mmHg
  const [age65, setAge65] = useState(false);
  const [score, setScore] = useState(null);

  const calculateScore = () => {
    const total =
      (confusion ? 1 : 0) +
      (urea ? 1 : 0) +
      (respRate ? 1 : 0) +
      (bp ? 1 : 0) +
      (age65 ? 1 : 0);
    setScore(total);
  };

  const interpretation = () => {
    if (score === 0 || score === 1) return 'Low risk (Consider outpatient treatment)';
    if (score === 2) return 'Moderate risk (Short hospital stay or close outpatient management)';
    if (score >= 3) return 'High risk (Consider hospitalization or intensive care)';
    return '';
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">CURB-65 Calculator</h2>
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={confusion}
            onChange={() => setConfusion(!confusion)}
            className="mr-2"
          />
          New onset confusion
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={urea}
            onChange={() => setUrea(!urea)}
            className="mr-2"
          />
          Blood urea nitrogen (BUN) &gt; 7 mmol/L
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={respRate}
            onChange={() => setRespRate(!respRate)}
            className="mr-2"
          />
          Respiratory rate ≥ 30 breaths/min
        </label>

        <label className="flex items-center">
  <input
    type="checkbox"
    checked={bp}
    onChange={() => setBP(!bp)}
    className="mr-2"
  />
  Systolic BP &lt; 90 mmHg or Diastolic BP ≤ 60 mmHg
</label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={age65}
            onChange={() => setAge65(!age65)}
            className="mr-2"
          />
          Age ≥ 65 years
        </label>
      </div>

      <button
        onClick={calculateScore}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Calculate CURB-65 Score
      </button>

      {score !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <p><strong>Total Score:</strong> {score} / 5</p>
          <p><strong>Interpretation:</strong> {interpretation()}</p>
        </div>
      )}
    </div>
  );
};

export default CURB65;