export const GET_BOOKS_REQUEST = 'GET_BOOKS_REQUEST'
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS'
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE'

export const getBookRequest = () => ({
    type: GET_BOOKS_REQUEST,
});

export const getBooksSuccess = (books) => {
    console.log(books);
    return {
        type: GET_BOOKS_SUCCESS,
        payload: books
    }
}

export const getBooksFailure = (error) => {
    return {
        type: GET_BOOKS_FAILURE,
        payload: error
    }
}
