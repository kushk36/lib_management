import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './redux/RootReducer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { watchFetchBooks } from './redux/BookSaga';
import rootSaga from './redux/index';

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware)
  }
})


sagaMiddleware.run(rootSaga)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
