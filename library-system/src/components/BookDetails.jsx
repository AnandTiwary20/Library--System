import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookDetails = ({ books }) => {
  // Extract book ID from URL parameters
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find(b => b.id === parseInt(id));

  const getFormattedDate = (dateString) => {
    if (!dateString) return 'Publication date not available';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getReadingTime = (pages) => {
    if (!pages) return '';
    const minutes = Math.ceil(pages * 2); 
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    if (hours > 0) {
      return ` • ${hours}h ${remainingMinutes}m read`;
    }
    return ` • ${minutes}m read`;
  };

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i} className="star filled" aria-hidden="true">★</span>);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<span key={i} className="star half" aria-hidden="true">★</span>);
      } else {
        stars.push(<span key={i} className="star" aria-hidden="true">★</span>);
      }
    }
    
    return (
      <div className="rating" aria-label={`Rated ${rating.toFixed(1)} out of 5`}>
        {stars}
        <span className="rating-text">
          {rating.toFixed(1)} out of 5 ({Math.floor(Math.random() * 100) + 20} ratings)
        </span>
      </div>
    );
  };

  // Handle case when book is not found
  if (!book) {
    return (
      <div className="book-not-found">
        <h2>Oops! We couldn't find that book</h2>
        <p>It seems the book you're looking for isn't in our collection.</p>
        <button 
          onClick={() => navigate('/browse')} 
          className="back-button"
          aria-label="Browse our collection"
        >
          ← Browse Our Collection
        </button>
      </div>
    );
  }

  return (
    <div className="book-details-page">
      <div className="book-details-container">
        <button 
          onClick={() => navigate(-1)} 
          className="back-button"
          aria-label="Go back to previous page"
        >
          ← Back to all books
        </button>
        
        <div className="book-content">
          <div className="book-cover-large">
            <img 
              src={book.coverImage} 
              alt={`Cover of ${book.title}`} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/300x450?text=No+Cover+Available';
              }}
            />
          </div>
          
          <div className="book-info">
            <div className="book-header">
              <h1 className="book-title">{book.title}</h1>
              <span className="book-category">{book.category}</span>
            </div>
            
            <p className="book-author">
              by <span className="author-name">{book.author}</span>
              {book.publishedDate && (
                <span className="book-year"> • {new Date(book.publishedDate).getFullYear()}</span>
              )}
            </p>
            
            <div className="book-meta">
              {book.rating && renderRating(book.rating)}
              <div className="book-stats">
                {book.pages && (
                  <span className="book-pages">
                    {book.pages} pages{getReadingTime(book.pages)}
                  </span>
                )}
                {book.publishedDate && (
                  <span className="book-published">
                    First published {getFormattedDate(book.publishedDate)}
                  </span>
                )}
              </div>
            </div>
            
            <div className="book-description">
              <h3>About this book</h3>
              <p>
                {book.description || 
                  'We\'re still gathering information about this title. ' +
                  'Check back soon for more details or ask our librarians for recommendations.'}
              </p>
            </div>
            
            <div className="book-actions">

              <button className="wishlist-button">
                Add to My Reading List
              </button>
            </div>
            
            <div className="book-extra">
              <div className="availability">
                <span className="status-dot available"></span>
                <span>Available now at 3 locations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;