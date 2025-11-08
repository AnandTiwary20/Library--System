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
   
     
    {  id: 2, 
      title: 'To Kill a Mockingbird', 
      author: 'Harper Lee', 
      category: 'Fiction', 
      description: 'A powerful story of racial injustice and the loss of innocence in the American South.',
      coverImage: 'https://pictures.abebooks.com/inventory/32200153366.jpg',
      rating: 4.8,
      pages: 281,
      publishedDate: '1960-07-11'
    },

    { 
      id: 3, 
      title: 'Sapiens: A Brief History of Humankind', 
      author: 'Yuval Noah Harari', 
      category: 'Non-Fiction', 
      description: 'A groundbreaking narrative of humanity\'s creation and evolution that explores the ways in which biology and history have defined us.',
      coverImage: 'https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg',
      rating: 4.6,
      pages: 498,
      publishedDate: '2014-02-10'
    },

    { 
      id: 4, 
      title: 'Dune', 
      author: 'Frank Herbert', 
      category: 'Sci-Fi', 
      description: 'A stunning blend of adventure and mysticism, environmentalism and politics, Dune won the first Nebula Award, shared the Hugo Award, and formed the basis of what is undoubtedly the grandest epic in science fiction.',
      coverImage: 'https://m.media-amazon.com/images/I/81ym3QUd3KL._AC_UF1000,1000_QL80_.jpg',
      rating: 4.7,
      pages: 658,
      publishedDate: '1965-06-01'
    },

    { 
      id: 5, 
      title: 'Becoming', 
      author: 'Michelle Obama', 
      category: 'Biography', 
      description: 'An intimate, powerful, and inspiring memoir by the former First Lady of the United States.',
      coverImage: 'https://m.media-amazon.com/images/I/81h2gWPTYJL._AC_UF1000,1000_QL80_.jpg',
      rating: 4.8,
      pages: 448,
      publishedDate: '2018-11-13'
    },
    { 
      id: 6, 
      title: 'The Silent Patient', 
      author: 'Alex Michaelides', 
      category: 'Thriller', 
      description: 'A psychological thriller about a woman who shoots her husband and then stops speaking.',
      coverImage: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-06/26/21/asset/0a0f2c728d19/sub-buzz-431-1593205814-19.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto',
      rating: 4.5,
      pages: 325,
      publishedDate: '2019-02-05'
    },

    { 
      id: 7, 
      title: 'The Hobbit', 
      author: 'J.R.R. Tolkien', 
      category: 'Fantasy', 
      description: 'The enchanting prelude to The Lord of the Rings, The Hobbit is the classic fantasy that first introduced Middle-earth and its inhabitants.',
      coverImage: 'https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg',
      rating: 4.8,
      pages: 310,
      publishedDate: '1937-09-21'
    },
    {
  id: 8,
  title: 'Project Hail Mary',
  author: 'Andy Weir',
  category: 'Sci-Fi',
  description: 'A lone astronaut must save the earth from disaster in this incredible new science-based thriller from the #1 New York Times bestselling author of The Martian.',
  coverImage: 'https://images1.penguinrandomhouse.com/cover/9798217299461',
  rating: 4.8,
  pages: 496,
  publishedDate: '2021-05-04'
},
{
  id: 9,
  title: 'The Song of Achilles',
  author: 'Madeline Miller',
  category: 'Historical Fiction',
  description: 'A thrilling, profoundly moving, and utterly unique retelling of the legend of Achilles and the Trojan War from the bestselling author of Circe.',
  coverImage: 'https://champaca.in/cdn/shop/products/51PH05QauDL_540x.jpg?v=1639727107',
  rating: 4.6,
  pages: 416,
  publishedDate: '2012-08-28'
},
{
  id: 10,
  title: 'The Midnight Library',
  author: 'Matt Haig',
  category: 'Fiction',
  description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.',
  coverImage: 'https://media.npr.org/assets/img/2020/09/30/815-u8gacyl_custom-6b18da73bda60986b0448abff5dc75ee9cb9837f.jpg?s=400&c=85&f=webp',
  rating: 4.2,
  pages: 304,
  publishedDate: '2020-08-13'
},


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
      // Add the new book to the beginning of the books array
      state.books.unshift(newBook); 
    }
  },
});

export const { addBook } = booksSlice.actions;

export const selectAllBooks = (state) => state.books.books;

export default booksSlice.reducer;
