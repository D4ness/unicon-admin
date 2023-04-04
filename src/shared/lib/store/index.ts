import {createStore, combineReducers} from 'redux';
import {counterReducer} from "../reducers/testCounter";


// combine reducers
const rootReducer = combineReducers({
    counter: counterReducer,
});

// create store
export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
