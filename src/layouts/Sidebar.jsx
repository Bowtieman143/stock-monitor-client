import React from 'react';
import Form from 'react-bootstrap/Form';
import WatchList from '../components/WatchList.jsx';

import './Sidebar.css';

function Sidebar(props) {
  const { changeStockProfileData } = props;

  return (
    <div id='sidebar' className='h-100 py-2'>
      <Form.Control
        className='mb-4'
        size='lg'
        type='text'
        placeholder='Large text'
      />
      <WatchList changeStockProfileData={changeStockProfileData} />
    </div>
  );
}

export default Sidebar;
