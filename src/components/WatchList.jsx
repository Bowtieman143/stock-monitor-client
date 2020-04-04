import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import './WatchList.css';

class WatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id='watch-list-card-container' className='justify-content-left'>
        <div className='d-flex justify-content-between align-items-center watch-list-item'>
          <Button className='rounded-0 watch-list-item-btn' variant='danger'>
            X
          </Button>
          <span className='text-white p-2'>AAPL</span>
          <Button
            className='rounded-0 watch-list-item-btn'
            variant='dark'
            onClick={() => {
              this.props.changeStockProfileData('aapl');
            }}
          >
            X
          </Button>
        </div>
        <div className='d-flex justify-content-between align-items-center watch-list-item'>
          <Button className='rounded-0 watch-list-item-btn' variant='danger'>
            X
          </Button>
          <span className='text-white p-2'>CLDR</span>
          <Button
            className='rounded-0 watch-list-item-btn'
            variant='dark'
            onClick={() => {
              this.props.changeStockProfileData('cldr');
            }}
          >
            X
          </Button>
        </div>
        <div className='d-flex justify-content-between align-items-center watch-list-item'>
          <Button className='rounded-0 watch-list-item-btn' variant='danger'>
            X
          </Button>
          <span className='text-white p-2'>X</span>
          <Button
            className='rounded-0 watch-list-item-btn'
            variant='dark'
            onClick={() => {
              this.props.changeStockProfileData('x');
            }}
          >
            X
          </Button>
        </div>
      </div>
    );
  }
}

export default WatchList;
