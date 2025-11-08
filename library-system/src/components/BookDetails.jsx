import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const BookDetails = ({ books }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="book-not-found">
        <h2>Book not found</h2>
        <Link to="/browse" className="back-button">Back to Browse</Link>
      </div>
    );
  }

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<span key={i} className="star half">★</span>);
      } else {
        stars.push(<span key={i} className="star">★</span>);
      }
    }
    
    return (
      <div className="rating">
        {stars}
        <span className="rating-text">{rating.toFixed(1)}/5.0</span>
      </div>
    );
  };

  return (
    <div className="book-details-page">
      <div className="book-details-container">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back to Browse
        </button>
        
        <div className="book-content">
          <div className="book-cover-large">
            <img src={book.coverImage} alt={book.title} />
          </div>
          
          <div className="book-info">
            <div className="book-header">
              <h1 className="book-title">{book.title}</h1>
              <span className="book-category">{book.category}</span>
            </div>
            
            <p className="book-author">by {book.author}</p>
            
            <div className="book-meta">
              {book.rating && renderRating(book.rating)}
              <span className="book-pages">{book.pages || 'N/A'} pages</span>
              <span className="book-published">Published: {book.publishedDate || 'N/A'}</span>
            </div>
            
            <div className="book-description">
              <h3>Description</h3>
              <p>{book.description || 'No description available.'}</p>
            </div>
            
            <div className="book-actions">
              <button className="borrow-button">Borrow Book</button>
              <button className="wishlist-button">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;