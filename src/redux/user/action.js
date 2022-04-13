import { LOGIN, SIGNUP, LOGOUT, BYPASS_CHECK, BYPASS_LOGIN } from "./actionType"

export const bypassCheckHandler = () => {
    return {
        type: BYPASS_CHECK
    }
}

export const loginHandler = (param) => {
    return {
        type: LOGIN,
        payload : param
    }
}

export const signupHandler = (param) => {
    return {
        type:SIGNUP,
        payload : param
    }
}

export const logoutHandler = (param) => {
    return {
        type: LOGOUT,
        payload : param
    }
}

export const bypassLogin = () => {
    return {
        type: BYPASS_LOGIN
    }
}