import React, { useState } from 'react';

const WellsScorePE = () => {
  const [criteria, setCriteria] = useState({
    dvtSigns: false,
    peLikely: false,
    hrOver100: false,
    immobOrSurgery: false,
    prevPeDvt: false,
    hemoptysis: false,
    malignancy: false,
  });

  const [score, setScore] = useState(null);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setCriteria({ ...criteria, [name]: checked });
  };

  const calculateScore = () => {
    let total = 0;
    if (criteria.dvtSigns) total += 3;
    if (criteria.peLikely) total += 3;
    if (criteria.hrOver100) total += 1.5;
    if (criteria.immobOrSurgery) total += 1.5;
    if (criteria.prevPeDvt) total += 1.5;
    if (criteria.hemoptysis) total += 1;
    if (criteria.malignancy) total += 1;
    setScore(total);
  };

  const getRiskCategory = () => {
    if (score >= 6) return 'High Risk';
    if (score >= 2) return 'Moderate Risk';
    return 'Low Risk';
  };

  const getRiskSummary = () => {
    if (score >= 6) {
      return 'High probability of PE. Consider immediate imaging (e.g., CT pulmonary angiogram) and treatment.';
    } else if (score >= 2) {
      return 'Moderate probability of PE. Consider D-dimer testing; if positive, proceed to imaging.';
    } else {
      return 'Low probability of PE. A negative D-dimer may safely exclude PE.';
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Wells Score for Pulmonary Embolism</h3>
      <form className="space-y-2">
        <label className="block">
          <input type="checkbox" name="dvtSigns" checked={criteria.dvtSigns} onChange={handleChange} />
          <span className="ml-2">Clinical signs and symptoms of DVT (3 points)</span>
        </label>

        <label className="block">
          <input type="checkbox" name="peLikely" checked={criteria.peLikely} onChange={handleChange} />
          <span className="ml-2">PE is more likely than alternative diagnosis (3 points)</span>
        </label>

        <label className="block">
          <input type="checkbox" name="hrOver100" checked={criteria.hrOver100} onChange={handleChange} />
          <span className="ml-2">Heart rate &gt; 100 bpm (1.5 points)</span>
        </label>

        <label className="block">
          <input type="checkbox" name="immobOrSurgery" checked={criteria.immobOrSurgery} onChange={handleChange} />
          <span className="ml-2">Immob. ≥3 days or surgery < 4 weeks (1.5 points)</span>
        </label>

        <label className="block">
          <input type="checkbox" name="prevPeDvt" checked={criteria.prevPeDvt} onChange={handleChange} />
          <span className="ml-2">Previous PE or DVT (1.5 points)</span>
        </label>

        <label className="block">
          <input type="checkbox" name="hemoptysis" checked={criteria.hemoptysis} onChange={handleChange} />
          <span className="ml-2">Hemoptysis (1 point)</span>
        </label>

        <label className="block">
          <input type="checkbox" name="malignancy" checked={criteria.malignancy} onChange={handleChange} />
          <span className="ml-2">Malignancy (1 point)</span>
        </label>
      </form>

      <button
        onClick={calculateScore}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Calculate Score
      </button>

      {score !== null && (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow-sm">
          <p className="text-lg font-bold text-green-700">Total Score: {score}</p>
          <p className="text-md font-semibold text-blue-700">Risk Category: {getRiskCategory()}</p>
          <p className="mt-2 text-gray-800">{getRiskSummary()}</p>
        </div>
      )}
    </div>
  );
};

export default WellsScorePE;