import React from 'react';
import WatchList from '../components/WatchList.jsx';

import './Sidebar.css';

function Sidebar(props) {
  const { changeStockProfileData } = props;

  return (
    <div id='sidebar' className='h-100 py-5'>
      <WatchList changeStockProfileData={changeStockProfileData} />
    </div>
  );
}

export default Sidebar;
