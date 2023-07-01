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
    }
})

export const { showBooks } = bookSlice.actions;
export default bookSlice.reducer;
