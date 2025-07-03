import React, { useState } from 'react';
import { categories } from '../data/calculators';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <aside className="w-64 bg-white h-screen shadow-lg p-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Medical Calculators</h2>
      {categories.map((cat, index) => (
        <div key={index} className="mb-3">
          <button
            onClick={() => toggleCategory(index)}
            className="w-full text-left font-medium text-blue-700 hover:underline"
          >
            {cat.title}
          </button>
          {openCategory === index && (
            <ul className="pl-4 mt-2 space-y-1">
              {cat.calculators.map((calc, idx) => (
                <li key={idx}>
                  <Link
                    to={calc.path}
                    className="text-sm text-gray-700 hover:text-blue-600"
                  >
                    {calc.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
