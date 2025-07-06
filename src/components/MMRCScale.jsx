import React, { useState } from 'react';

const MMRCDyspnoeaScale = () => {
  const [selectedGrade, setSelectedGrade] = useState(null);

  const grades = [
    {
      grade: 0,
      description: "Dyspnoea only with strenuous exercise.",
    },
    {
      grade: 1,
      description: "Short of breath when hurrying or walking up a slight hill.",
    },
    {
      grade: 2,
      description: "Walks slower than people of the same age or has to stop for breath while walking at own pace.",
    },
    {
      grade: 3,
      description: "Stops for breath after walking about 100 meters or after a few minutes.",
    },
    {
      grade: 4,
      description: "Too breathless to leave the house or breathless when dressing.",
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">mMRC Dyspnoea Scale</h3>
      <div className="space-y-4">
        {grades.map((item) => (
          <label key={item.grade} className="block border p-3 rounded hover:bg-gray-50">
            <input
              type="radio"
              name="mmrc"
              value={item.grade}
              onChange={() => setSelectedGrade(item.grade)}
              className="mr-2"
            />
            <strong>Grade {item.grade}:</strong> {item.description}
          </label>
        ))}
      </div>

      {selectedGrade !== null && (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow-sm">
          <p className="text-green-700 font-bold text-lg">Selected Grade: {selectedGrade}</p>
          <p className="text-gray-800 mt-1">{grades[selectedGrade].description}</p>
        </div>
      )}
    </div>
  );
};

export default MMRCDyspnoeaScale;