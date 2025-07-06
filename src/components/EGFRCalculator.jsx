import React, { useState } from 'react';

const EGFRCalculator = () => {
  const [scr, setScr] = useState('');
  const [age, setAge] = useState('');
  const [isFemale, setIsFemale] = useState(false);
  const [isBlack, setIsBlack] = useState(false);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const SCr = parseFloat(scr);
    const A = parseFloat(age);
    if (!SCr || !A) return;

    let egfr = 141 * Math.pow(Math.min(SCr / 0.9, 1), -0.411) *
                     Math.pow(Math.max(SCr / 0.9, 1), -1.209) *
                     Math.pow(0.993, A);
    if (isFemale) egfr *= 1.018;
    if (isBlack) egfr *= 1.159;
    setResult(egfr.toFixed(2));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">eGFR (CKD-EPI) Calculator</h3>
      <input type="number" placeholder="Serum Creatinine (mg/dL)" value={scr} onChange={(e) => setScr(e.target.value)} />
      <input type="number" placeholder="Age (years)" value={age} onChange={(e) => setAge(e.target.value)} />
      <label><input type="checkbox" checked={isFemale} onChange={() => setIsFemale(!isFemale)} /> Female</label>
      <label><input type="checkbox" checked={isBlack} onChange={() => setIsBlack(!isBlack)} /> Black</label>
      <button onClick={calculate}>Calculate</button>
      {result && <p>eGFR: {result} mL/min/1.73m²</p>}
    </div>
  );
};

export default EGFRCalculator;