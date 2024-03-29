import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
//import { composeWithDevTools } from 'remote-redux-devtools';

import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";

const middleware = [thunk];

function saveToLocalStorage(state) {
    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    }
    catch(e){
        console.log(e);
    }
}

function loadFromLocalStorage(){
    try{
        const serializedState =localStorage.getItem('state')
        if(serializedState === null ) return undefined
            return JSON.parse(serializedState)
    }
    catch(e){
        console.log(e);
        return undefined
    }
}

const persistedState = loadFromLocalStorage()

function configureStore() {
    return createStore(
        rootReducer,
        persistedState,
        //composeWithDevTools(applyMiddleware(...middleware))
        applyMiddleware(...middleware)
    );
}
const store = configureStore();

store.subscribe(()=>{saveToLocalStorage(store.getState())})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
