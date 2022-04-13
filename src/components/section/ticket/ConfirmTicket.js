import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { curMenuHandler } from '../../../redux/menu/action';

const ConfirmTicket = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loc = useLocation();

    useEffect(() => {
        dispatch(curMenuHandler({no:5, name:'예약완료 티켓확인', link: loc.pathname}));
     },[]);

    return (
        <div>
            
        </div>
    );
};

export default ConfirmTicket;