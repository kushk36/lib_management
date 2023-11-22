import { all } from 'redux-saga/effects'
import { watchFetchBooks } from './BookSaga'

export default function* rootSaga() {
    yield all([
        watchFetchBooks()
    ])
}
