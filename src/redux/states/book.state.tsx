import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../../interfaces/Book";

export const BookEmptyState: Book = {
    title: "",
    description: "",
    authors: [""],
    language: "",
    categories: "",
    imageLinks: { thumbnail: "" }
}

// ⬇️⬇️⬇️ REDUCER ⬇️⬇️⬇️
export const bookSlice = createSlice({
    name: "book",
    initialState: BookEmptyState,
    reducers: {
        modifyBook: (state, action) => ({ ...state, ...action.payload})
    },
})

export const { modifyBook } = bookSlice.actions;