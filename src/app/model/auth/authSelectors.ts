import {createSelector} from "reselect";
import {AuthState} from "./authReducer";

export const getStateSelector = () => (state: { auth: AuthState }) => {
    return state;
}

const stateSelector = getStateSelector();
export const makeSelectAuth = () =>
    createSelector(stateSelector, (state) => {
        return state.auth
    });