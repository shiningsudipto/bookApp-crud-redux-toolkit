import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        { id: 123, title: "Love Bangladesh", author: "Rahim" },
        { id: 124, title: "Sundarban", author: "Karim" }
    ]
}

export const bookSlice = createSlice({
    name: 'book',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const { id, title, author } = action.payload;
            const matchedBook = state.books.find(book => book.id === id);
            if (matchedBook) {
                matchedBook.title = title;
                matchedBook.author = author;
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
        },
    }
})

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
