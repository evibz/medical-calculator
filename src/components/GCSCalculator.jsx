import React, { useState } from 'react';

const GCSCalculator = () => {
  const [eye, setEye] = useState(4);
  const [verbal, setVerbal] = useState(5);
  const [motor, setMotor] = useState(6);
  const [total, setTotal] = useState(null);

  const calculateGCS = () => {
    const score = parseInt(eye) + parseInt(verbal) + parseInt(motor);
    setTotal(score);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Glasgow Coma Scale (GCS) Calculator</h3>

      <div className="space-y-4">
        {/* Eye Response */}
        <div>
          <label className="block font-semibold mb-1">Eye Opening Response</label>
          <select value={eye} onChange={(e) => setEye(e.target.value)} className="w-full p-2 border rounded">
            <option value={4}>4 – Spontaneous</option>
            <option value={3}>3 – To speech</option>
            <option value={2}>2 – To pain</option>
            <option value={1}>1 – No response</option>
          </select>
        </div>

        {/* Verbal Response */}
        <div>
          <label className="block font-semibold mb-1">Verbal Response</label>
          <select value={verbal} onChange={(e) => setVerbal(e.target.value)} className="w-full p-2 border rounded">
            <option value={5}>5 – Oriented</option>
            <option value={4}>4 – Confused</option>
            <option value={3}>3 – Inappropriate words</option>
            <option value={2}>2 – Incomprehensible sounds</option>
            <option value={1}>1 – No response</option>
          </select>
        </div>

        {/* Motor Response */}
        <div>
          <label className="block font-semibold mb-1">Motor Response</label>
          <select value={motor} onChange={(e) => setMotor(e.target.value)} className="w-full p-2 border rounded">
            <option value={6}>6 – Obeys commands</option>
            <option value={5}>5 – Localizes pain</option>
            <option value={4}>4 – Withdraws to pain</option>
            <option value={3}>3 – Flexion to pain</option>
            <option value={2}>2 – Extension to pain</option>
            <option value={1}>1 – No response</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateGCS}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Calculate GCS Score
      </button>

      {total !== null && (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow-sm">
          <p className="text-green-700 font-bold text-lg">Total GCS Score: {total}</p>
          <p className="text-gray-800 mt-1">
            {total <= 8
              ? 'Severe brain injury (GCS ≤ 8).'
              : total <= 12
              ? 'Moderate brain injury (GCS 9–12).'
              : 'Mild brain injury (GCS 13–15).'}
          </p>
        </div>
      )}
    </div>
  );
};

export default GCSCalculator;