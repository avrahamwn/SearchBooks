import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//redux
import { Provider } from 'react-redux'
import { createStore, compose, combineReducers } from 'redux'
import wishListReducer from './redux/reducers/WishListReducer'
import usernameReducer from './redux/reducers/usernameReducer'
//persistance
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//redux devtools
const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

//root reducer
const rootReducer = combineReducers(
    {
        wishList: wishListReducer,
        username: usernameReducer
    }
)

//persist config
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

//create store
const store = createStore(persistedReducer, { wishList: [], username: '' }, enhancers)
const persistor = persistStore(store)


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
