import React, { useState } from 'react';

const GRACEScoreCalculator = () => {
  const [age, setAge] = useState('');
  const [hr, setHr] = useState('');
  const [sbp, setSbp] = useState('');
  const [creatinine, setCreatinine] = useState('');
  const [killip, setKillip] = useState('');
  const [stDeviation, setStDeviation] = useState(false);
  const [elevatedEnzymes, setElevatedEnzymes] = useState(false);
  const [cardiacArrest, setCardiacArrest] = useState(false);
  const [score, setScore] = useState(null);

  const calculateGRACE = () => {
    const A = parseInt(age);
    const HR = parseInt(hr);
    const SBP = parseInt(sbp);
    const C = parseFloat(creatinine);
    const K = parseInt(killip);

    if (!A || !HR || !SBP || !C || !K) {
      alert("Please fill all required fields.");
      return;
    }

    let total = 0;

    // Age scoring
    total += A > 80 ? 70 : A > 70 ? 60 : A > 60 ? 50 : A > 50 ? 40 : 30;

    // Heart rate scoring
    total += HR > 100 ? 20 : HR > 80 ? 10 : 0;

    // Systolic BP scoring
    total += SBP < 100 ? 40 : SBP < 120 ? 20 : 0;

    // Creatinine scoring
    total += C > 2.0 ? 30 : C > 1.5 ? 20 : 10;

    // Killip class scoring
    total += K === 1 ? 0 : K === 2 ? 20 : K === 3 ? 40 : 60;

    // Other binary parameters
    if (stDeviation) total += 30;
    if (elevatedEnzymes) total += 40;
    if (cardiacArrest) total += 40;

    setScore(total);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">GRACE Score Calculator</h3>

      <div className="space-y-2">
        <input
          type="number"
          placeholder="Age (years)"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full border rounded p-2"
        />

        <input
          type="number"
          placeholder="Heart Rate (bpm)"
          value={hr}
          onChange={(e) => setHr(e.target.value)}
          className="w-full border rounded p-2"
        />

        <input
          type="number"
          placeholder="Systolic BP (mmHg)"
          value={sbp}
          onChange={(e) => setSbp(e.target.value)}
          className="w-full border rounded p-2"
        />

        <input
          type="number"
          placeholder="Serum Creatinine (mg/dL)"
          value={creatinine}
          onChange={(e) => setCreatinine(e.target.value)}
          className="w-full border rounded p-2"
        />

        <input
          type="number"
          placeholder="Killip Class (1-4)"
          value={killip}
          onChange={(e) => setKillip(e.target.value)}
          className="w-full border rounded p-2"
        />

        <label className="block">
          <input type="checkbox" checked={stDeviation} onChange={() => setStDeviation(!stDeviation)} />
          <span className="ml-2">ST Segment Deviation</span>
        </label>

        <label className="block">
          <input type="checkbox" checked={elevatedEnzymes} onChange={() => setElevatedEnzymes(!elevatedEnzymes)} />
          <span className="ml-2">Elevated Cardiac Enzymes</span>
        </label>

        <label className="block">
          <input type="checkbox" checked={cardiacArrest} onChange={() => setCardiacArrest(!cardiacArrest)} />
          <span className="ml-2">Cardiac Arrest on Admission</span>
        </label>
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
        onClick={calculateGRACE}
      >
        Calculate GRACE Score
      </button>

      {score !== null && (
        <p className="mt-4 text-green-600 font-bold">Estimated GRACE Score: {score}</p>
      )}
    </div>
  );
};

export default GRACEScoreCalculator;