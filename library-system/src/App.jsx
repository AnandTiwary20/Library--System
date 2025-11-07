import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BookCard from './components/BookCard';
import CategoryList from './components/CategoryList';
import Navbar from './components/Navbar';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample book data
  const books = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
      description: 'A story of decadence and excess, set in the Roaring Twenties.',
      coverImage: 'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 2,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      category: 'Non-Fiction',
      description: 'A brief history of humankind, exploring the ways in which biology and history have defined us.',
      coverImage: 'https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 3,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Sci-Fi',
      description: 'A science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset in the galaxy.',
      coverImage: 'https://m.media-amazon.com/images/I/61xwG7i+1zL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 4,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Fiction',
      description: 'A powerful story of racial injustice and the loss of innocence in the American South.',
      coverImage: 'https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg',
    },
  ];

  const categories = ['All', 'Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'History'];

  const filteredBooks = selectedCategory === 'All' 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  const Home = () => (
    <>
      <header className="header">
        <h1>Welcome to Our Library</h1>
        <p>Discover your next favorite book</p>
      </header>
      
      <main className="main-content">
        <CategoryList 
          categories={categories} 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        <h2 className="section-title">
          {selectedCategory === 'All' ? 'Popular Books' : `${selectedCategory} Books`}
        </h2>
        
        <div className="book-grid">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>
    </>
  );

  const BrowseBooks = () => (
    <div className="browse-page">
      <h2>All Books</h2>
      <div className="book-grid">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
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
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
        <footer className="footer">
          <p>© 2025 Library System. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
