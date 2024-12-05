import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces/User";
import { BookEmptyState } from "./book.state";

export const UserEmptyState: User = {
    cart: [BookEmptyState]
}

export const userSlice = createSlice({
    name: "user",
    initialState: UserEmptyState,
    reducers: {
        addProduct : (state, action) => ({...state, ...action.payload})
    }
})

export const {addProduct } = userSlice.actions;