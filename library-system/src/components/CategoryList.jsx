import React from 'react';

const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    // Container for the category filter buttons
    <div className="category-list" role="tablist" aria-label="Book categories">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
