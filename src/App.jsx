import React, { useState } from 'react';
import CategorySelector from './components/CategorySelector';
import CalculatorList from './components/CalculatorList';
import BMICalculator from './components/BMICalculator';
import { calculators } from './data/calculators';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCalculator, setSelectedCalculator] = useState('');

  const categoryList = Object.keys(calculators);
  const calculatorList = selectedCategory ? calculators[selectedCategory] : [];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md">
        <CategorySelector
          categories={categoryList}
          onSelect={(category) => {
            setSelectedCategory(category);
            setSelectedCalculator('');
          }}
        />
        <CalculatorList
          calculators={calculatorList}
          onSelect={setSelectedCalculator}
        />
        <div className="p-4">
          {selectedCalculator === 'bmi' && <BMICalculator />}
          {selectedCalculator && selectedCalculator !== 'bmi' && (
            <p className="text-gray-500 italic">
              Calculator "{selectedCalculator}" not implemented yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;