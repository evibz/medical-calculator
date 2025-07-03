import React from 'react';

const CalculatorList = ({ calculators, onSelect }) => {
  if (!calculators || calculators.length === 0) return null;

  return (
    <div className="p-4">
      <h2 className="font-semibold mb-2">Select Calculator:</h2>
      <ul className="space-y-2">
        {calculators.map((calc) => (
          <li key={calc.id}>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
              onClick={() => onSelect(calc.id)}
            >
              {calc.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalculatorList;
