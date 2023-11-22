import { GET_BOOKS_FAILURE, GET_BOOKS_SUCCESS, GET_BOOKS_REQUEST } from "./BookAction"

const intialState = {
    books: [],
    loading: false,
    error: null
}

const bookReducer = (state = intialState, action) => {
    switch (action.type) {

        case GET_BOOKS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }

        case GET_BOOKS_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }

        case GET_BOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default bookReducer
