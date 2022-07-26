import {authAPI, DataLoginType} from "../api/authAPI";
import {Dispatch} from "redux";
import {AxiosError} from "axios";
import {errorUtils} from "../common/utils/error-util";
import {setStatusAC} from "./appReducer";


const initialState = {
    isLoggedIn: false,
}


type InitialStateType = typeof initialState

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, isLoggedIn: action.value}


        default:
            return state
    }
}

export const loginAC = (value: boolean) => ({type: 'LOGIN', value} as const);


// thunks
export const loginTC = (data: DataLoginType) => (dispatch:Dispatch) => {
    dispatch(setStatusAC(true))
    authAPI.login(data)
        .then((res) => {
            dispatch(loginAC(true))
           // dispatch(setUserDataAC(res.data))
        })
        .catch((error: AxiosError<{error: string }>) => {
           errorUtils(error, dispatch)
        })
        .finally(() => {
            dispatch(setStatusAC(false))
        })
}




export type ActionsType = ReturnType<typeof loginAC>

