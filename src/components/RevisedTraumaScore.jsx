import React, { useState } from "react";

const RevisedTraumaScore = () => {
  const [gcs, setGcs] = useState(15);
  const [sbp, setSbp] = useState(120);
  const [rr, setRr] = useState(16);

  const gcsScore = () => {
    if (gcs >= 13) return 4;
    if (gcs >= 9) return 3;
    if (gcs >= 6) return 2;
    if (gcs >= 4) return 1;
    return 0;
  };

  const sbpScore = () => {
    if (sbp >= 89) return 4;
    if (sbp >= 76) return 3;
    if (sbp >= 50) return 2;
    if (sbp >= 1) return 1;
    return 0;
  };

  const rrScore = () => {
    if (rr >= 10 && rr <= 29) return 4;
    if (rr > 29) return 3;
    if (rr >= 6) return 2;
    if (rr >= 1) return 1;
    return 0;
  };

  const rts = (0.9368 * gcsScore()) + (0.7326 * sbpScore()) + (0.2908 * rrScore());

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Revised Trauma Score (RTS)</h2>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Glasgow Coma Scale (GCS)</label>
        <input
          type="number"
          value={gcs}
          onChange={(e) => setGcs(Number(e.target.value))}
          min="3"
          max="15"
          className="w-full border rounded p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Systolic Blood Pressure (SBP) mmHg</label>
        <input
          type="number"
          value={sbp}
          onChange={(e) => setSbp(Number(e.target.value))}
          min="0"
          className="w-full border rounded p-2"
        />
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-1">Respiratory Rate (RR) /min</label>
        <input
          type="number"
          value={rr}
          onChange={(e) => setRr(Number(e.target.value))}
          min="0"
          className="w-full border rounded p-2"
        />
      </div>

      <div className="bg-gray-100 p-4 rounded shadow">
        <p><strong>RTS Score:</strong> {rts.toFixed(2)}</p>
        <p className="text-sm text-gray-600 mt-1">
          Higher scores indicate better physiological status. Max score is 7.84.
        </p>
      </div>
    </div>
  );
};

export default RevisedTraumaScore;
