import React from 'react';

const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-list">
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
