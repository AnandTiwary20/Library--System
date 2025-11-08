import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { 
      id: 1, 
      title: 'The Great Gatsby', 
      author: 'F. Scott Fitzgerald', 
      category: 'Fiction', 
      description: 'A story of decadence, excess, and the pursuit of the American Dream in the Roaring Twenties.',
      coverImage: 'https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg',
      rating: 4.2,
      pages: 180,
      publishedDate: '1925-04-10'
    },
    // ... other initial books
  ]
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: nanoid(),
        ...action.payload
      };
      state.books.unshift(newBook); // Add to beginning of array
    }
  },
});

export const { addBook } = booksSlice.actions;

export const selectAllBooks = (state) => state.books.books;

export default booksSlice.reducer;
