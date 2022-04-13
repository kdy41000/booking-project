import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation  } from 'react-router-dom';
import { 
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Button

} from 'reactstrap';
import { curMenuHandler } from '../../../redux/menu/action';
import { bypassCheckHandler, loginHandler } from '../../../redux/user/action';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [bypass, setBypass] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loc = useLocation();
    console.log("로그인",useLocation());

     const loginInfo = useSelector(state => state.userReducer.loginInfo);
     const loginChkInfo = useSelector(state => state.userReducer.loginChkInfo);

     useEffect(() => {
        if(loginInfo.id != null && loginInfo.id !== '') {
          setId(loginInfo.id);
        }
        
        dispatch(curMenuHandler({no:1, name:'로그인', link: loc.pathname}));
     },[]);

     useEffect(() => {
        console.log("로그인 useEffect:",loginChkInfo);
        if(!loginChkInfo.status && loginChkInfo.msg !== '') {
          alert(loginChkInfo.msg);
        } else if(loginChkInfo && loginChkInfo.msg !== '') {
          alert(loginChkInfo.msg);
          navigate("/main/home");
        } 
   },[loginChkInfo]);


     const onChangeId = (e) => {
         setId(e.target.value);
     }
     const onChangePassword = (e) => {
         setPassword(e.target.value);
     }
     const onClickCheckbox = (e) => {
         setBypass(e.target.checked);
     }
     const onSubmit = (e) => {
         e.preventDefault();
         if(id === '') return alert('아이디를 입력하세요.');
         if(password === '') return alert('패스워드를 입력하세요.');
         const obj = {id: id, password: password, bypass: bypass};
         console.log("obj:",obj);
         dispatch(loginHandler(obj));
      
     }
     const onClickSignup = () => {
         console.log("클릭")
         navigate("/user/signup");
     }

    return ( 
        <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="userId">
            Id
          </Label>
          <Input
            id="userId"
            name="id"
            placeholder="아이디를 입력하세요."
            type="text"
            value={id}
            onChange={onChangeId}
          />
        </FormGroup>
        <FormGroup>
          <Label for="userPassword">
            Password
          </Label>
          <Input
            id="userPassword"
            name="password"
            placeholder="패스워드를 입력하세요."
            type="password"
            value={password}
            onChange={onChangePassword}
          />
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" onClick={(e)=> onClickCheckbox(e)}/>
          {' '}
          <Label check>
            자동로그인
          </Label>
        </FormGroup>
        <Button type="submit">
          로그인
        </Button>
        <Button onClick={()=> onClickSignup()}>
          회원가입
        </Button>
    </Form>
    );
};

export default Login;