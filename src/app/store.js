import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/book/bookSlice";

const store = configureStore({
    reducer: {
        booksReducer: booksReducer,
    }
})

export default store;