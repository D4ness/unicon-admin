import { combineReducers } from "redux";
import {counterReducer} from "./testCounter";
import {authReducer} from "../../../app/model/auth/authReducer";

export const rootReducer = combineReducers({
    count: counterReducer,
    auth: authReducer,
});
// reducers
