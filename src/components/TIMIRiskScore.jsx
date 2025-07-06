import React, { useState } from 'react';

const TIMIRiskScore = () => {
  const [factors, setFactors] = useState({
    age65Plus: false,
    threeRiskFactors: false,
    knownCAD: false,
    aspirinUse: false,
    recentSevereAngina: false,
    elevatedMarkers: false,
    stDeviation: false,
  });

  const [score, setScore] = useState(null);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFactors({ ...factors, [name]: checked });
  };

  const calculateScore = () => {
    const scoreValue = Object.values(factors).filter(Boolean).length;
    setScore(scoreValue);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">TIMI Risk Score (UA/NSTEMI)</h3>
      <form className="space-y-2">
        <label className="block">
          <input type="checkbox" name="age65Plus" checked={factors.age65Plus} onChange={handleCheckboxChange} />
          <span className="ml-2">Age ≥ 65 years</span>
        </label>

        <label className="block">
          <input type="checkbox" name="threeRiskFactors" checked={factors.threeRiskFactors} onChange={handleCheckboxChange} />
          <span className="ml-2">At least 3 risk factors for CAD (HTN, DM, smoker, etc.)</span>
        </label>

        <label className="block">
          <input type="checkbox" name="knownCAD" checked={factors.knownCAD} onChange={handleCheckboxChange} />
          <span className="ml-2">Known CAD (stenosis ≥ 50%)</span>
        </label>

        <label className="block">
          <input type="checkbox" name="aspirinUse" checked={factors.aspirinUse} onChange={handleCheckboxChange} />
          <span className="ml-2">Aspirin use in the past 7 days</span>
        </label>

        <label className="block">
          <input type="checkbox" name="recentSevereAngina" checked={factors.recentSevereAngina} onChange={handleCheckboxChange} />
          <span className="ml-2">≥2 episodes of angina in last 24 hours</span>
        </label>

        <label className="block">
          <input type="checkbox" name="elevatedMarkers" checked={factors.elevatedMarkers} onChange={handleCheckboxChange} />
          <span className="ml-2">Elevated cardiac markers (e.g., troponin)</span>
        </label>

        <label className="block">
          <input type="checkbox" name="stDeviation" checked={factors.stDeviation} onChange={handleCheckboxChange} />
          <span className="ml-2">ST segment deviation ≥ 0.5 mm</span>
        </label>
      </form>

      <button
        className="bg-blue-600 text-white mt-4 px-4 py-2 rounded"
        onClick={calculateScore}
      >
        Calculate TIMI Score
      </button>

      {score !== null && (
        <p className="mt-4 text-green-600 font-bold">TIMI Score: {score} / 7</p>
      )}
    </div>
  );
};

export default TIMIRiskScore;