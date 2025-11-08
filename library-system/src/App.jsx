import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';
import CategoryList from './components/CategoryList';
import BookDetails from './components/BookDetails';
import './App.css';  


function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', description: '...', coverImage: 'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg' },
    { id: 2, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiction', description: '...', coverImage: 'https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg' },
    { id: 3, title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', description: '...', coverImage: 'https://m.media-amazon.com/images/I/61xwG7i+1zL._AC_UF1000,1000_QL80_.jpg' },
    { id: 4, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', description: '...', coverImage: 'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg' },
  ];

  const categories = ['All', 'Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'History'];

  const filteredBooks = (selectedCategory === 'All' ? books : books.filter(book => book.category === selectedCategory))
    .filter(book =>
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
    <div className="browse-page">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <h2>All Books</h2>
      <div className="book-grid">
        {filteredBooks.map(book => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );

  const AddBook = () => (
    <div className="add-book-page">
      <h2>Add a New Book</h2>
      <p>Add book form will go here</p>
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
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
        <footer className="footer">
          <p>© 2025 Library System. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

