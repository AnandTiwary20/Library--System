import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate(`/book/${book.id}`);
  };

  // Format the category to be more readable
  const formatCategory = (category) => {
    return category.replace('-', ' ');
  };

  return (
    <div className="book-card" onClick={handleCardClick}>
      <div className="book-cover">
        <img 
          src={book.coverImage} 
          alt={`Cover of ${book.title}`} 
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = 'https://via.placeholder.com/150x225?text=No+Cover';
          }}
        />
      </div>
      
      <div className="book-details">
        <h3 className="book-title">
          {book.title.length > 30 
            ? `${book.title.substring(0, 30)}...` 
            : book.title
          }
        </h3>
        
        <p className="book-author">
          by <span className="author-name">{book.author}</span>
        </p>
        
        <div className="book-meta">
          <span className="book-category">
            {formatCategory(book.category)}
          </span>
          {book.rating && (
            <div className="book-rating">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`star ${i < Math.floor(book.rating) ? 'filled' : ''}`}
                >
                  ★
                </span>
              ))}
              <span className="rating-text">
                {book.rating.toFixed(1)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
