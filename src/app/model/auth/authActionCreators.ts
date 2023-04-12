import {Dispatch} from "react";
import axios from "../../../shared/api/axiosInstance";
import {GetMeAction, GetMeActionTypes} from "../../../shared/lib/types/authTypes";


export const authGetMe = () => {
    return async (dispatch: Dispatch<GetMeAction>) => {
        dispatch({type: GetMeActionTypes.GET_ME_START, payload: []})
        try {
            const { data } = await axios.get('/auth/getme');
            dispatch({type: GetMeActionTypes.GET_ME_SUCCESS, payload: data})
        } catch (e) {
            dispatch({
                type: GetMeActionTypes.GET_ME_ERROR,
                payload: 'Произошла ошибка при загрузке ...'
            })
        }
    }
}



