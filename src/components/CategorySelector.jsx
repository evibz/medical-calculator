const CategorySelector = ({ categories, onSelect }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium text-gray-700">
        Select Category:
      </label>
      <select
        className="w-full p-2 border rounded focus:ring focus:border-blue-500"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">-- Choose a Category --</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;