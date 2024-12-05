import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./states/book.state";
import { userSlice } from "./states/user.state";
import { Book } from "../interfaces/Book";
import { User } from "../interfaces/User";


export interface AppStore {
    book: Book;
    user: User;
}

export default configureStore<AppStore>({
    reducer: {
        book: bookSlice.reducer,
        user: userSlice.reducer
    }
})