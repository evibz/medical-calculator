import React, { useState } from "react";

const qSOFA = () => {
  const [criteria, setCriteria] = useState({
    alteredMentalStatus: false,
    systolicBP: false,
    respiratoryRate: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setCriteria((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const score = Object.values(criteria).filter(Boolean).length;

  const interpretation =
    score >= 2
      ? "High risk of poor outcome (consider sepsis)."
      : "Lower risk, continue monitoring.";

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">qSOFA Score</h2>

      <div className="space-y-4">
        <label className="block">
          <input
            type="checkbox"
            name="alteredMentalStatus"
            checked={criteria.alteredMentalStatus}
            onChange={handleChange}
            className="mr-2"
          />
          Altered mental status (GCS &lt; 15)
        </label>

        <label className="block">
          <input
            type="checkbox"
            name="systolicBP"
            checked={criteria.systolicBP}
            onChange={handleChange}
            className="mr-2"
          />
          Systolic BP ≤ 100 mmHg
        </label>

        <label className="block">
          <input
            type="checkbox"
            name="respiratoryRate"
            checked={criteria.respiratoryRate}
            onChange={handleChange}
            className="mr-2"
          />
          Respiratory rate ≥ 22/min
        </label>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded shadow">
        <p><strong>qSOFA Score:</strong> {score}</p>
        <p className="mt-2"><strong>Interpretation:</strong> {interpretation}</p>
      </div>
    </div>
  );
};

export default qSOFA;