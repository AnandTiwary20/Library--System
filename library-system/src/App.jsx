import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllBooks } from './features/books/booksSlice';
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';
import CategoryList from './components/CategoryList';
import BookDetails from './components/BookDetails';
import AddBookForm from './features/books/AddBookForm';
import './App.css';
import PageNotFound from './components/PageNotFound';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const books = useSelector(selectAllBooks);

  const categories = ['All', 'Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'History'];

  const filteredBooks = (selectedCategory === 'All' 
    ? books 
    : books.filter(book => book.category === selectedCategory)
  ).filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Home = () => (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>Welcome to Our Library</h1>
          <p>Discover your next favorite book from our collection</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <Link to="/add-book" className="add-book-button">
              + Add New Book
            </Link>
          </div>
        </div>
      </header>
      
      <main className="main-content">
        <div className="book-section">
          <div className="section-header">
            <h2 className="section-title">
              {selectedCategory === 'All' ? 'Popular Books' : `${selectedCategory} Books`}
            </h2>
            <CategoryList 
              categories={categories} 
              selectedCategory={selectedCategory} 
              onSelectCategory={setSelectedCategory} 
            />
          </div>
          
          {filteredBooks.length > 0 ? (
            <div className="book-grid">
              {filteredBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="no-books">
              <p>No books found matching your search. Try a different term or category.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );

  const BrowseBooks = () => (
    <div className="browse-books">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="book-grid">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/book/:id" element={<BookDetails books={books} />} />
          <Route path="/add-book" element={<AddBookForm />} />
        </Routes>
        
        <footer className="footer">
          <p>&copy; 2025 Library System. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

