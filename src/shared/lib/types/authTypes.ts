interface IGetMe {
    _id: string;
    name: string;
    text: string;
}


export enum GetMeActionTypes {
    GET_ME_START = "GET_ME_START",
    GET_ME_SUCCESS = "GET_ME_SUCCESS",
    GET_ME_ERROR = "GET_ME_ERROR",
}

interface GetMeActionStart {
    type: GetMeActionTypes.GET_ME_START,
    payload: [],
}

interface GetMeActionSuccess {
    type: GetMeActionTypes.GET_ME_SUCCESS,
    payload: IGetMe[],
}

interface GetMeActionError {
    type: GetMeActionTypes.GET_ME_ERROR,
    payload: string,
}

export type GetMeAction = GetMeActionStart | GetMeActionSuccess | GetMeActionError;

interface ILogin {
    _id: string;
    name: string;
    text: string;
}


export enum LoginActionTypes {
    LOGIN_REQUEST_START = "LOGIN_REQUEST_START",
    LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS",
    LOGIN_REQUEST_ERROR = "LOGIN_REQUEST_ERROR",
}

interface LoginActionStart {
    type: LoginActionTypes.LOGIN_REQUEST_START,
    payload: [],
}

interface LoginActionSuccess {
    type: LoginActionTypes.LOGIN_REQUEST_SUCCESS,
    payload: ILogin[],
}

interface LoginActionError {
    type: LoginActionTypes.LOGIN_REQUEST_ERROR,
    payload: string,
}

export type LoginAction = LoginActionStart | LoginActionSuccess | LoginActionError;
interface ILogout {
    _id: string;
    name: string;
    text: string;
}


export enum LogoutActionTypes {
    LOGOUT_REQUEST_START = "LOGOUT_REQUEST_START",
    LOGOUT_REQUEST_SUCCESS = "LOGOUT_REQUEST_SUCCESS",
    LOGOUT_REQUEST_ERROR = "LOGOUT_REQUEST_ERROR",
}

interface LogoutActionStart {
    type: LogoutActionTypes.LOGOUT_REQUEST_START,
    payload: [],
}

interface LogoutActionSuccess {
    type: LogoutActionTypes.LOGOUT_REQUEST_SUCCESS,
    payload: ILogout[],
}

interface LogoutActionError {
    type: LogoutActionTypes.LOGOUT_REQUEST_ERROR,
    payload: string,
}

export type LogoutAction = LogoutActionStart | LogoutActionSuccess | LogoutActionError;

export type AuthAction = GetMeAction | LoginAction | LogoutAction;