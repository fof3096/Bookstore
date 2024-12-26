import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces/User";

export const UserEmptyState: User = {
    cart: []
}

export const userSlice = createSlice({
    name: "user",
    initialState: UserEmptyState,
    reducers: {
        addProduct: (state, action) => ({...state.cart, ...action.payload})
    }
})

export const { addProduct } = userSlice.actions;