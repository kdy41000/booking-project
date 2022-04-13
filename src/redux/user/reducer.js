import { LOGIN, SIGNUP, BYPASS_CHECK, LOGOUT, BYPASS_LOGIN } from "./actionType"

const initialState = {
    loginInfo: localStorage.getItem('loginInfo') == null ? {bypass: false, id:'',password:'',name:''} : JSON.parse(localStorage.getItem('loginInfo')),
    loginChkInfo: {status: null, msg:''}
}

const userReducer = (state=initialState, action) => {
    const storageLoginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    console.log("storageLoginInfo:",storageLoginInfo);
    switch(action.type) {
        case BYPASS_CHECK:
            console.log("바이패스");
            const loginInfo = storageLoginInfo === null ? state.loginInfo : storageLoginInfo;
            return {
                ...state,
                loginInfo : loginInfo
            }
        case LOGIN:
            console.log("=======로그인 리듀서================");
            console.log(action.payload);
            const checkInfo = storageLoginInfo;
        
            if(checkInfo == null) {
                return {
                    ...state,
                    loginChkInfo : {status: false, msg: "존재하지 않는 정보입니다. 회원가입을 진행하세요"}
                }
            }
            else if(checkInfo.id !== action.payload.id){
                return {
                    ...state,
                    loginChkInfo : {status: false, msg: "아이디가 일치하지 않습니다."}
                }
            } else if(checkInfo.password !== action.payload.password) {
                console.log("비밀번호 노일치");
                return {
                    ...state,
                    loginChkInfo : {status: false, msg: "비밀번호가 일치하지 않습니다."}
                }
            } else if(checkInfo.id === action.payload.id && checkInfo.password === action.payload.password) {
                localStorage.setItem('loginInfo',JSON.stringify({bypass: action.payload.bypass, id: storageLoginInfo.id, password:storageLoginInfo.password, name:storageLoginInfo.name}))
                return {
                    ...state,
                    loginChkInfo : {status: true, msg: "로그인 성공!"},
                    loginInfo : {bypass: action.payload.bypass, id: storageLoginInfo.id, password:storageLoginInfo.password, name:storageLoginInfo.name}
                }
            }
            return;
            case SIGNUP:
                console.log("회원가입");
                localStorage.setItem('loginInfo',JSON.stringify(action.payload));
                return {
                    ...state,
                    loginInfo: {bypass: false, id:action.payload.id, password:'',name:''},
                };
            case LOGOUT:
                return {
                    ...state,
                    loginChkInfo : {status: false, msg: ""},
                    loginInfo: {bypass: false, id:action.payload, password:'',name:''},
                }
            case BYPASS_LOGIN:
                return {
                    ...state,
                    loginChkInfo : {status: true, msg: "로그인 성공!"}
                }
        default: return state;
    }
}

export default userReducer;