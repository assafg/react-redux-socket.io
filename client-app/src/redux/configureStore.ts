import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import io from 'socket.io-client';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';
import preloadedState from './preloadedState';
import { loadState, saveState } from './localStorage';
import simpleValuesSlice, { updateValue } from './reducers';

const persistedState = loadState();

const store = configureStore({
    reducer: { simpleValues: simpleValuesSlice },
    middleware: [...getDefaultMiddleware(), logger],
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: persistedState || preloadedState,
    enhancers: [],
});

store.subscribe(
    throttle(() => {
        saveState({
            todos: store.getState().simpleValues,
        });
    }, 1000)
);

// Register for socket notifications
const tickerSocket = io('http://127.0.0.1:4000/simpleValue');
tickerSocket.on('message', (msg: string) => {
    store.dispatch(
        updateValue({
            value: msg,
        })
    );
});

export default store;
