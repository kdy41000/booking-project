import React,{ useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector, useDispatch } from 'react-redux';
import { bypassCheckHandler } from './redux/user/action'
import RouteControl from './components/RouteControl';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Header from './components/header/Header';
import {
  Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter
} from 'reactstrap';
import Menu from './components/header/Menu';
import Footer from './components/footer/Footer';

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
        <Menu />
        <Card>
          <CardHeader tag="h3">
            <Header/>
          </CardHeader>    
         <CardBody style={{height:'83vh'}}>
            <RouteControl />
         </CardBody>
         <CardFooter className="text-muted">
            <Footer />
         </CardFooter>
        </Card>
      </BrowserRouter>
    </div>
  );
}

export default App;