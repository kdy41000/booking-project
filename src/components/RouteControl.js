import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './section/login/Login';
import Home from './section/main/Home';
import Signup from './section/signup/Signup';

const RouteControl = () => {
  const navigate = useNavigate();
  const loginInfo = useSelector(state => state.userReducer.loginInfo);

  useEffect(() => {
    console.log("loginInfo:",loginInfo);
     if(loginInfo != null) { 
       if(!loginInfo.bypass) {
         navigate("/user/login");
       } else if(loginInfo.bypass) {
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
            </Routes>
        </div>
    );
};

export default RouteControl;