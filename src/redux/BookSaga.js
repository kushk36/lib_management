import { takeLatest, put, call } from 'redux-saga/effects'
import { getBooksSuccess, getBooksFailure, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from './BookAction';
import HelperFunction from './HelperFunction';

function* fetchBooks() {
    try {
        // Fetch books using your API or fetch method
        const response = yield call(HelperFunction.fetchBooks);
        console.log("function called");
        // yield put(getBooksSuccess(response.data));
        // console.log(response);
        yield put({ type: GET_BOOKS_SUCCESS, payload: response })
    } catch (error) {
        yield put(getBooksFailure(error));
    }
}

export function* watchFetchBooks() {
    yield takeLatest(GET_BOOKS_REQUEST, fetchBooks)
}
