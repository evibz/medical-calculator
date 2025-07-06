import React, { useState } from 'react';

const CreatinineClearance = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [serumCreatinine, setSerumCreatinine] = useState('');
  const [isFemale, setIsFemale] = useState(false);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const A = parseFloat(age);
    const W = parseFloat(weight);
    const SCr = parseFloat(serumCreatinine);
    if (!A || !W || !SCr) return;
    let crcl = ((140 - A) * W) / (72 * SCr);
    if (isFemale) crcl *= 0.85;
    setResult(crcl.toFixed(2));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Creatinine Clearance (Cockcroft-Gault)</h3>
      <input type="number" placeholder="Age (years)" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <input type="number" placeholder="Serum Creatinine (mg/dL)" value={serumCreatinine} onChange={(e) => setSerumCreatinine(e.target.value)} />
      <label>
        <input type="checkbox" checked={isFemale} onChange={(e) => setIsFemale(e.target.checked)} /> Female
      </label>
      <button onClick={calculate}>Calculate</button>
      {result && <p>Creatinine Clearance: {result} mL/min</p>}
    </div>
  );
};

export default CreatinineClearance;