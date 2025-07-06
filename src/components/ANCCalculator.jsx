import React, { useState } from 'react';

const ANCCalculator = () => {
  const [wbc, setWBC] = useState('');
  const [neutrophils, setNeutrophils] = useState('');
  const [bands, setBands] = useState('');
  const [anc, setANC] = useState(null);

  const calculateANC = () => {
    const wbcNum = parseFloat(wbc);
    const neutroPercent = parseFloat(neutrophils);
    const bandPercent = parseFloat(bands);

    if (!isNaN(wbcNum) && !isNaN(neutroPercent) && !isNaN(bandPercent)) {
      const result = wbcNum * (neutroPercent + bandPercent) / 100;
      setANC(result.toFixed(2));
    } else {
      setANC(null);
    }
  };

  const interpretation = () => {
    if (anc === null) return '';
    const value = parseFloat(anc);
    if (value < 500) return 'Severe neutropenia';
    if (value < 1000) return 'Moderate neutropenia';
    if (value < 1500) return 'Mild neutropenia';
    return 'Normal ANC';
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">ANC Calculator</h2>

      <div className="space-y-3">
        <div>
          <label className="block font-medium">WBC count (×10³/µL):</label>
          <input
            type="number"
            value={wbc}
            onChange={(e) => setWBC(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-medium">% Neutrophils (Segs):</label>
          <input
            type="number"
            value={neutrophils}
            onChange={(e) => setNeutrophils(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-medium">% Bands:</label>
          <input
            type="number"
            value={bands}
            onChange={(e) => setBands(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>

        <button
          onClick={calculateANC}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Calculate ANC
        </button>
      </div>

      {anc !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <p><strong>ANC:</strong> {anc} ×10³/µL</p>
          <p><strong>Interpretation:</strong> {interpretation()}</p>
        </div>
      )}
    </div>
  );
};

export default ANCCalculator;