import { useReducer } from "react";
import bookReducer from "./BookReducer";
import { createContext } from "react";

export const BookContext = createContext()

export const BookProvider = ({ children }) => {
    const intialState = {
        books: []
    }

    const [state, dispatch] = useReducer(bookReducer, intialState)

    return <BookContext.Provider value={{ ...state, dispatch }}>
        {children}
    </BookContext.Provider>
}
