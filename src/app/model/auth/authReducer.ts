import {
    AuthAction,
    GetMeActionTypes,
    LoginActionTypes,
    LogoutActionTypes
} from "../../../shared/lib/types/authTypes";

export interface AuthState {
    user: object | null;
    isAuth: boolean;
    isLoading: boolean;
}

const initialState: AuthState = {
    user: {},
    isAuth: false,
    isLoading: false,
}
export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type){
        case GetMeActionTypes.GET_ME_START:
            return {...state, isLoading: true};
        case GetMeActionTypes.GET_ME_SUCCESS:
            return {...state, isLoading: false, user: action.payload, isAuth: true}
        case GetMeActionTypes.GET_ME_ERROR:
            return {...state, isLoading: false, user: null}
        case LoginActionTypes.LOGIN_REQUEST_START:
            return {...state, isLoading: true};
        case LoginActionTypes.LOGIN_REQUEST_SUCCESS:
            return {...state, isLoading: false, user: action.payload, isAuth: true}
        case LoginActionTypes.LOGIN_REQUEST_ERROR:
            return {...state, isLoading: false, user: null}
        case LogoutActionTypes.LOGOUT_REQUEST_START:
            return {...state, isLoading: true};
        case LogoutActionTypes.LOGOUT_REQUEST_SUCCESS:
            return {...state, isLoading: false, isAuth: false}
        case LogoutActionTypes.LOGOUT_REQUEST_ERROR:
            return {...state, isLoading: false}
        default:
            return {...state}
    }
}