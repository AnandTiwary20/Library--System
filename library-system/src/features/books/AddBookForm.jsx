import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './booksSlice';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      author: '',
      category: 'Fiction',
      description: '',
      coverImage: '',
      rating: '',
      pages: '',
      publishedDate: ''
    }
  });

  const onSubmit = (data) => {
    const bookData = {
      ...data,
      rating: parseFloat(data.rating),
      pages: parseInt(data.pages, 10),
    };
    
    dispatch(addBook(bookData));
    navigate('/browse');
  };

  const categories = [
    'Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Mystery', 
    'Romance', 'Thriller', 'Biography', 'History', 'Self-Help'
  ];

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="add-book-form">
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            type="text"
            {...register('title', { required: 'Title is required' })}
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <span className="error-message">{errors.title.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="author">Author *</label>
          <input
            id="author"
            type="text"
            {...register('author', { required: 'Author is required' })}
            className={errors.author ? 'error' : ''}
          />
          {errors.author && <span className="error-message">{errors.author.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="category">Category *</label>
          <select
            id="category"
            {...register('category', { required: 'Category is required' })}
            className={errors.category ? 'error' : ''}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="4"
            {...register('description')}
          />
        </div>

        <div className="form-group">
          <label htmlFor="coverImage">Cover Image URL</label>
          <input
            id="coverImage"
            type="url"
            {...register('coverImage', {
              pattern: {
                value: /^https?:\/\//i,
                message: 'Please enter a valid URL starting with http:// or https://'
              }
            })}
            className={errors.coverImage ? 'error' : ''}
            placeholder="https://example.com/image.jpg"
          />
          {errors.coverImage && (
            <span className="error-message">{errors.coverImage.message}</span>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="rating">Rating (1-5)</label>
            <input
              id="rating"
              type="number"
              step="0.1"
              min="1"
              max="5"
              {...register('rating', {
                required: 'Rating is required',
                min: { value: 1, message: 'Minimum rating is 1' },
                max: { value: 5, message: 'Maximum rating is 5' }
              })}
              className={errors.rating ? 'error' : ''}
            />
            {errors.rating && (
              <span className="error-message">{errors.rating.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="pages">Pages</label>
            <input
              id="pages"
              type="number"
              min="1"
              {...register('pages', {
                min: { value: 1, message: 'Must be at least 1 page' }
              })}
              className={errors.pages ? 'error' : ''}
            />
            {errors.pages && (
              <span className="error-message">{errors.pages.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="publishedDate">Published Date</label>
            <input
              id="publishedDate"
              type="date"
              {...register('publishedDate')}
            />
          </div>
        </div>

        <div className="form-actions">
          <button 
            type="button" 
            onClick={() => navigate(-1)} 
            className="cancel-button"
            aria-label="Cancel and go back"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="submit-button"
            aria-label="Add new book to library"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
