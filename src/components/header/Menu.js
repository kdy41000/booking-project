import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
    Nav,
    NavItem,
    NavLink,
    Button,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem
} from 'reactstrap'
import { logoutHandler } from '../../redux/user/action';

const Menu = () => {
    const menuList = useSelector(state => state.menuReducer.menuList);
    const loginChkInfo = useSelector(state => state.userReducer.loginChkInfo);
    const loginInfo = useSelector(state => state.userReducer.loginInfo);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    let loginStatus = false;
    let T = null;
    if(loginChkInfo.status != null && loginChkInfo.status) {
        loginStatus = true;
    } 
    console.log("메ㅔㄹ레:",loginChkInfo);
    console.log("메뉴 로그인정보:",loginStatus);
    if(loginStatus) {  //로그인 상태
        const loginArr = menuList.slice(2, menuList.length);
        T = loginArr.map((menu) => 
                                  <NavItem key={menu.no}>
                                    <Link to={menu.link} style={{textDecoration:'none'}}>
                                      <NavLink >
                                        {menu.name}
                                      </NavLink>
                                    </Link>
                                  </NavItem>
                              )
    } else {  //로그아웃 상태
        const logoutArr = menuList.slice(0,2);
        T = logoutArr.map((menu) => 
                              <NavItem key={menu.no}>
                                <Link to={menu.link} style={{textDecoration:'none'}}>
                                  <NavLink >
                                    {menu.name}
                                  </NavLink>
                                </Link>
                              </NavItem>
                          )
       
    }

    const onClickLogout = () => {
      dispatch(logoutHandler(loginInfo.id));
      navigate('/user/login');
    }
    
    return (
        <div>
        <Nav pills>
          {T}
          {loginStatus ? <Button onClick={()=> onClickLogout()}>로그아웃</Button> : null}
        </Nav>
      </div>
    );
};

export default Menu;