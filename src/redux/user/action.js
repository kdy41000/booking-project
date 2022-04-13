import { LOGIN, SIGNUP, BYPASS_CHECK } from "./actionType"

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

// export const removeUserHandler = (userId) => {
//     return {
//         type: REMOVE_USER,
//         payload: userId
//     }
// }

// export const editUserHandler = (targetUser) => {
//     return {
//         type: EDIT_USER,
//         payload: targetUser
//     }
// }