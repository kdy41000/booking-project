import { CUR_MENU } from "./actionType"

export const curMenuHandler = (param) => {
    return {
        type: CUR_MENU,
        payload: param
    }
}