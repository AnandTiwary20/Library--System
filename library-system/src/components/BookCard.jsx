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
      <div className="book-info">
        <h3>{book.title}</h3>
        <p className="author">By {book.author}</p>
        <p className="category">{book.category}</p>
        <p className="description">{book.description}</p>
        <button onClick={handleViewDetails} className="view-details">
          View Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;
