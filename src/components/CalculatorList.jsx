const CalculatorList = ({ calculators, onSelect, selectedId }) => {
  if (!calculators || calculators.length === 0) return null;

  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-2 text-gray-700">Select Calculator:</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {calculators.map((calc) => (
          <button
            key={calc.id}
            onClick={() => onSelect(calc.id)}
            className={`px-4 py-2 rounded shadow-sm font-medium text-white transition
              ${selectedId === calc.id
                ? 'bg-blue-600'
                : 'bg-blue-400 hover:bg-blue-500'}`}
          >
            {calc.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorList;