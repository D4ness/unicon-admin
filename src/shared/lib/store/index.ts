import {createStore, combineReducers, applyMiddleware} from 'redux';
import {counterReducer} from "../reducers/testCounter";
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "../reducers";
import thunk from "redux-thunk";



// create store
export type AppState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer,
});
