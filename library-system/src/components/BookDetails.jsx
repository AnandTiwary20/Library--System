import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BookDetails = ({ books }) => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return <div className="book-details">Book not found</div>;
  }

  return (
    <div className="book-details">
      <div className="book-details-container">
        <div className="book-cover-large">
          <img src={book.coverImage} alt={book.title} />
        </div>
        <div className="book-info">
          <h1>{book.title}</h1>
          <h2>By {book.author}</h2>
          <span className="category">{book.category}</span>
          <p className="description">{book.description}</p>
          <div className="book-meta">
            <span className="rating">⭐ 4.5/5</span>
            <span className="pages">📖 320 pages</span>
            <span className="published">📅 Published: 2020</span>
          </div>
          <div className="book-actions">
            <button className="borrow-btn">Borrow Book</button>
            <Link to="/browse" className="back-link">← Back to Books</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;