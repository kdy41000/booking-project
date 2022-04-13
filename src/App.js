import React,{ useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector, useDispatch } from 'react-redux';
import { bypassCheckHandler } from './redux/user/action'
import RouteControl from './components/RouteControl';
import { BrowserRouter, useNavigate } from 'react-router-dom';

let isInitial = true;  //avoid-first-rendering

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      dispatch(bypassCheckHandler());
      console.log("===resding");
    }
  },[]);

//console.log("loginInfo:",loginInfo);

  return (
    <div>
      <BrowserRouter>
         <RouteControl />
      </BrowserRouter>
    </div>
  );
}

export default App;