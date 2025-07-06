import React, { useState } from "react";

const DAS28Calculator = () => {
  const [tjc, setTjc] = useState(""); // Tender Joint Count (0–28)
  const [sjc, setSjc] = useState(""); // Swollen Joint Count (0–28)
  const [esr, setEsr] = useState(""); // ESR (or CRP)
  const [vas, setVas] = useState(""); // Visual Analogue Scale (0–100)
  const [das28, setDas28] = useState(null);
  const [category, setCategory] = useState("");

  const calculateDAS28 = () => {
    const t = parseFloat(tjc);
    const s = parseFloat(sjc);
    const e = parseFloat(esr);
    const v = parseFloat(vas);

    if (isNaN(t) || isNaN(s) || isNaN(e) || isNaN(v)) {
      setDas28(null);
      setCategory("Please enter all values.");
      return;
    }

    const score =
      0.56 * Math.sqrt(t) +
      0.28 * Math.sqrt(s) +
      0.70 * Math.log(e) +
      0.014 * v;

    setDas28(score.toFixed(2));

    if (score < 2.6) setCategory("Remission");
    else if (score >= 2.6 && score <= 3.2) setCategory("Low Disease Activity");
    else if (score > 3.2 && score <= 5.1) setCategory("Moderate Disease Activity");
    else setCategory("High Disease Activity");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">DAS28 Calculator (RA)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Tender Joint Count (0–28)"
          value={tjc}
          onChange={(e) => setTjc(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Swollen Joint Count (0–28)"
          value={sjc}
          onChange={(e) => setSjc(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="ESR (mm/h)"
          value={esr}
          onChange={(e) => setEsr(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Patient Global Assessment (0–100)"
          value={vas}
          onChange={(e) => setVas(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <button
        onClick={calculateDAS28}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Calculate DAS28
      </button>

      {das28 && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <p><strong>DAS28 Score:</strong> {das28}</p>
          <p><strong>Interpretation:</strong> {category}</p>
        </div>
      )}
    </div>
  );
};

export default DAS28Calculator;