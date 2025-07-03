import React from 'react';

const CategorySelector = ({ categories, onSelect }) => {
  return (
    <div className="p-4">
      <label className="block mb-2 font-bold">Select Category:</label>
      <select
        className="p-2 border rounded w-full"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">-- Choose a Category --</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
