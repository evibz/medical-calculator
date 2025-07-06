import React, { useState } from "react";

const PediatricGFR = () => {
  const [height, setHeight] = useState("");
  const [creatinine, setCreatinine] = useState("");
  const [result, setResult] = useState(null);

  const calculateGFR = () => {
    const k = 0.413;
    const h = parseFloat(height);
    const cr = parseFloat(creatinine);

    if (!isNaN(h) && !isNaN(cr) && cr > 0) {
      const gfr = (k * h) / cr;
      setResult(gfr.toFixed(2));
    } else {
      setResult(null);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Pediatric GFR (Schwartz Formula)</h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1">Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter height in cm"
          />
        </div>

        <div>
          <label className="block mb-1">Serum Creatinine (mg/dL):</label>
          <input
            type="number"
            value={creatinine}
            onChange={(e) => setCreatinine(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter serum creatinine"
          />
        </div>

        <button
          onClick={calculateGFR}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Calculate GFR
        </button>
      </div>

      {result && (
        <div className="mt-4 p-4 bg-green-100 rounded shadow">
          <p>
            <strong>Estimated GFR:</strong> {result} mL/min/1.73m²
          </p>
        </div>
      )}
    </div>
  );
};

export default PediatricGFR;