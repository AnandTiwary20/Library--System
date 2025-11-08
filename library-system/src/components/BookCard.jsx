import React from 'react';

const BookCard = ({ book }) => {
  const handleViewDetails = () => {
    // In a real app, this would navigate to the book details page
    alert(`Viewing details for: ${book.title}`);
  };

  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={book.coverImage} alt={book.title} />
      </div>
      <div className="book-details">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">By {book.author}</p>
        <span className="book-category">{book.category}</span>
      </div>
    </div>
  );
};

export default BookCard;
