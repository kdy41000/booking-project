import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const curMenuInfo = useSelector(state => state.menuReducer.curMenu);
    console.log("curMenuInfo:",curMenuInfo);
    return (
      <div>
         예약시스템 &gt; {curMenuInfo.name}
      </div>
    );
};

export default Header;