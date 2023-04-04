import { combineReducers } from "redux";
import {counterReducer} from "./testCounter";

export const rootReducer = combineReducers({
    count: counterReducer,
});
// reducers
