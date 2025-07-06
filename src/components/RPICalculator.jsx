import React, { useState } from 'react';

const RPICalculator = () => {
  const [reticPercent, setReticPercent] = useState('');
  const [hematocrit, setHematocrit] = useState('');
  const [normalHematocrit, setNormalHematocrit] = useState(45);
  const [rpi, setRPI] = useState(null);

  const calculateRPI = () => {
    const retic = parseFloat(reticPercent);
    const hct = parseFloat(hematocrit);
    const normHct = parseFloat(normalHematocrit);

    if (isNaN(retic) || isNaN(hct) || isNaN(normHct) || hct === 0) {
      setRPI(null);
      return;
    }

    const correctionFactor = getMaturationFactor(hct);
    const result = (retic * (hct / normHct)) / correctionFactor;
    setRPI(result.toFixed(2));
  };

  const getMaturationFactor = (hct) => {
    if (hct >= 40) return 1;
    if (hct >= 30) return 1.5;
    if (hct >= 20) return 2;
    return 2.5; // For severe anemia
  };

  const interpretation = () => {
    if (rpi === null) return '';
    const value = parseFloat(rpi);
    if (value < 2) return 'Inadequate marrow response (hypoproliferative anemia)';
    return 'Adequate marrow response';
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">RPI Calculator</h2>

      <div className="space-y-3">
        <div>
          <label className="block font-medium">Reticulocyte %:</label>
          <input
            type="number"
            value={reticPercent}
            onChange={(e) => setReticPercent(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-medium">Patient Hematocrit (%):</label>
          <input
            type="number"
            value={hematocrit}
            onChange={(e) => setHematocrit(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>

        <div>
          <label className="block font-medium">Normal Hematocrit (%):</label>
          <input
            type="number"
            value={normalHematocrit}
            onChange={(e) => setNormalHematocrit(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>

        <button
          onClick={calculateRPI}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Calculate RPI
        </button>
      </div>

      {rpi !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <p><strong>RPI:</strong> {rpi}</p>
          <p><strong>Interpretation:</strong> {interpretation()}</p>
        </div>
      )}
    </div>
  );
};

export default RPICalculator;