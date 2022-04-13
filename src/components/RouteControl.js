import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { bypassLogin } from '../redux/user/action';
import Login from './section/login/Login';
import Home from './section/main/Home';
import Signup from './section/signup/Signup';
import ConfirmTicket from './section/ticket/ConfirmTicket';
import TicketList from './section/ticket/TicketList';

const RouteControl = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginInfo = useSelector(state => state.userReducer.loginInfo);

  useEffect(() => {
    console.log("loginInfo:",loginInfo);
     if(loginInfo != null) { 
       if(!loginInfo.bypass) {
         navigate("/user/login");
       } else if(loginInfo.bypass) {
         dispatch(bypassLogin());
         navigate("/main/home");
       }
   } 
   },[]);
  
  
    return (
        <div>
            <Routes>
                <Route exact path="/user/login" element={<Login/>}/>
                <Route exact path="/user/signup" element={<Signup/>}/>
                <Route exact path="/main/home" element={<Home/>}/>
                <Route exact path="/ticket/list" element={<TicketList/>}/>
                <Route exact path="/ticket/confirm" element={<ConfirmTicket/>}/>
            </Routes>
        </div>
    );
};

export default RouteControl;