import React from 'react';

function FilterSection() {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-6">
      <div className="flex space-x-4 mb-4">
        <input 
          type="text" 
          placeholder="Search publication name" 
          className="border border-gray-300 p-2 rounded-md w-full" 
        />
        <select className="border border-gray-300 p-2 rounded-md">
          <option value="price-asc">Price (Asc)</option>
          <option value="price-desc">Price (Desc)</option>
        </select>
      </div>
      <div className="flex space-x-4 mb-4">
        <input 
          type="range" 
          min="0" 
          max="100000" 
          className="w-full" 
        />
        <select className="border border-gray-300 p-2 rounded-md">
          <option value="">Select regions</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          {/* Add more region options as needed */}
        </select>
      </div>
      <div className="flex flex-wrap space-x-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>News</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>Business</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>Lifestyle</span>
        </label>
        {/* Add more genres as needed */}
      </div>
    </div>
  );
}

export default FilterSection;
