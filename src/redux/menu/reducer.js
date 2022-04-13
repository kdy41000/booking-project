import { CUR_MENU } from "./actionType"

const initialState = {
    curMenu: {no: 0, name:'', link: ''},
    menuList: [
              {no: 1, name: '로그인', link: '/user/login'},
              {no: 2, name: '회원가입', link: '/user/signup'},
              {no: 3, name: '홈', link: '/main/home'},
              {no: 4, name: '항공권 목록', link: '/ticket/list'},
              {no: 5, name: '예약완료 티켓확인', link: '/ticket/confirm'}
            ]
}

const menuReducer = (state=initialState, action) => {
    switch(action.type) {
        case CUR_MENU:
            return {
                ...state,
                curMenu : action.payload
            }
        default: return state;
    }
}

export default menuReducer;