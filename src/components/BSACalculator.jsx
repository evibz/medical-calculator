import React, { useState } from 'react';

const BSACalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bsa, setBsa] = useState(null);

  const calculateBSA = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w) return;
    const result = Math.sqrt((h * w) / 3600).toFixed(2);
    setBsa(result);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">BSA Calculator (Du Bois Formula)</h3>
      <div className="mb-2">
        <label>Height (cm):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full border p-2 rounded" />
      </div>
      <div className="mb-2">
        <label>Weight (kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full border p-2 rounded" />
      </div>
      <button onClick={calculateBSA} className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Calculate BSA</button>
      {bsa && <p className="mt-4 text-green-600 font-bold">BSA: {bsa} m²</p>}
    </div>
  );
};

export default BSACalculator;