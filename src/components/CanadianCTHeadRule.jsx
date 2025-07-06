import React, { useState } from "react";

const CanadianCTHeadRule = () => {
  const [criteria, setCriteria] = useState({
    gcs: false,
    suspectedSkullFracture: false,
    vomiting: false,
    age65OrMore: false,
    amnesia30Min: false,
    dangerousMechanism: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setCriteria((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const highRisk = criteria.gcs || criteria.suspectedSkullFracture || criteria.vomiting || criteria.age65OrMore;
  const mediumRisk = criteria.amnesia30Min || criteria.dangerousMechanism;

  const recommendation = () => {
    if (highRisk) return "CT Scan Recommended (High Risk)";
    if (mediumRisk) return "Consider CT Scan (Medium Risk)";
    return "CT Scan Not Necessary (Low Risk)";
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Canadian CT Head Rule</h2>

      <div className="space-y-3 mb-6">
        <label className="block">
  <input
    type="checkbox"
    name="gcs"
    checked={criteria.gcs}
    onChange={handleChange}
    className="mr-2"
  />
  GCS &lt; 15 at 2 hours after injury
</label>

        <label className="block">
          <input
            type="checkbox"
            name="suspectedSkullFracture"
            checked={criteria.suspectedSkullFracture}
            onChange={handleChange}
            className="mr-2"
          />
          Suspected open/depressed skull fracture or basal skull fracture
        </label>

        <label className="block">
          <input
            type="checkbox"
            name="vomiting"
            checked={criteria.vomiting}
            onChange={handleChange}
            className="mr-2"
          />
          ≥2 episodes of vomiting
        </label>

        <label className="block">
          <input
            type="checkbox"
            name="age65OrMore"
            checked={criteria.age65OrMore}
            onChange={handleChange}
            className="mr-2"
          />
          Age ≥ 65 years
        </label>

        <label className="block">
          <input
            type="checkbox"
            name="amnesia30Min"
            checked={criteria.amnesia30Min}
            onChange={handleChange}
            className="mr-2"
          />
          Amnesia before impact ≥ 30 minutes
        </label>

        <label className="block">
          <input
            type="checkbox"
            name="dangerousMechanism"
            checked={criteria.dangerousMechanism}
            onChange={handleChange}
            className="mr-2"
          />
          Dangerous mechanism (e.g., pedestrian struck, ejection from vehicle, fall from elevation &gt;3ft/5 stairs)
        </label>
      </div>

      <div className="bg-gray-100 p-4 rounded shadow">
        <p><strong>Recommendation:</strong> {recommendation()}</p>
      </div>
    </div>
  );
};

export default CanadianCTHeadRule;
