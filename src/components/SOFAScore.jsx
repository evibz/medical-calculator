import React, { useState } from 'react';

const SOFAScoreCalculator = () => {
  const [paO2FiO2, setPaO2FiO2] = useState('');
  const [platelets, setPlatelets] = useState('');
  const [bilirubin, setBilirubin] = useState('');
  const [mapOrVasopressors, setMapOrVasopressors] = useState('');
  const [glasgow, setGlasgow] = useState('');
  const [creatinine, setCreatinine] = useState('');
  const [score, setScore] = useState(null);

  const calculateSOFA = () => {
    let total = 0;

    // PaO2/FiO2
    const pf = parseFloat(paO2FiO2);
    if (pf < 100) total += 4;
    else if (pf < 200) total += 3;
    else if (pf < 300) total += 2;
    else if (pf < 400) total += 1;

    // Platelets (×10³/mm³)
    const plt = parseInt(platelets);
    if (plt < 20) total += 4;
    else if (plt < 50) total += 3;
    else if (plt < 100) total += 2;
    else if (plt < 150) total += 1;

    // Bilirubin (mg/dL)
    const bili = parseFloat(bilirubin);
    if (bili > 12) total += 4;
    else if (bili > 6) total += 3;
    else if (bili > 2) total += 2;
    else if (bili > 1.2) total += 1;

    // MAP or vasopressors (simplified)
    const map = parseInt(mapOrVasopressors);
    if (map < 70) total += 1;

    // GCS
    const gcs = parseInt(glasgow);
    if (gcs < 6) total += 4;
    else if (gcs < 10) total += 3;
    else if (gcs < 13) total += 2;
    else if (gcs < 15) total += 1;

    // Creatinine
    const cr = parseFloat(creatinine);
    if (cr > 5) total += 4;
    else if (cr > 3.5) total += 3;
    else if (cr > 2) total += 2;
    else if (cr > 1.2) total += 1;

    setScore(total);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">SOFA Score Calculator</h3>

      <div className="space-y-2">
        <input
          type="number"
          placeholder="PaO2/FiO2 (mmHg)"
          value={paO2FiO2}
          onChange={(e) => setPaO2FiO2(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Platelets (×10³/mm³)"
          value={platelets}
          onChange={(e) => setPlatelets(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Bilirubin (mg/dL)"
          value={bilirubin}
          onChange={(e) => setBilirubin(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="MAP (mmHg)"
          value={mapOrVasopressors}
          onChange={(e) => setMapOrVasopressors(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Glasgow Coma Scale (3–15)"
          value={glasgow}
          onChange={(e) => setGlasgow(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Creatinine (mg/dL)"
          value={creatinine}
          onChange={(e) => setCreatinine(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        onClick={calculateSOFA}
        className="bg-blue-600 text-white mt-4 px-4 py-2 rounded"
      >
        Calculate SOFA Score
      </button>

      {score !== null && (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow-sm">
          <p className="text-green-700 font-bold text-lg">SOFA Score: {score}</p>
          <p className="text-gray-800 mt-1">
            {score >= 2
              ? 'Organ dysfunction likely. Higher scores correlate with increased mortality.'
              : 'No significant organ dysfunction detected.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default SOFAScoreCalculator;