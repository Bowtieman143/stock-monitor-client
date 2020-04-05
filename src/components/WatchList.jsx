import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faChartLine} />
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
            <FontAwesomeIcon icon={faChartLine} />
          </Button>
        </div>
        <div className='d-flex justify-content-between align-items-center watch-list-item'>
          <Button className='rounded-0 watch-list-item-btn' variant='danger'>
            X
          </Button>
          <span className='text-white p-2'>FR</span>
          <Button
            className='rounded-0 watch-list-item-btn'
            variant='dark'
            onClick={() => {
              this.props.changeStockProfileData('fr');
            }}
          >
            <FontAwesomeIcon icon={faChartLine} />
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
            <FontAwesomeIcon icon={faChartLine} />
          </Button>
        </div>
        <div className='d-flex justify-content-between align-items-center watch-list-item'>
          <Button className='rounded-0 watch-list-item-btn' variant='danger'>
            X
          </Button>
          <span className='text-white p-2'>FDS</span>
          <Button
            className='rounded-0 watch-list-item-btn'
            variant='dark'
            onClick={() => {
              this.props.changeStockProfileData('fds');
            }}
          >
            <FontAwesomeIcon icon={faChartLine} />
          </Button>
        </div>
        <div className='d-flex justify-content-between align-items-center watch-list-item'>
          <Button className='rounded-0 watch-list-item-btn' variant='danger'>
            X
          </Button>
          <span className='text-white p-2'>FE</span>
          <Button
            className='rounded-0 watch-list-item-btn'
            variant='dark'
            onClick={() => {
              this.props.changeStockProfileData('fe');
            }}
          >
            <FontAwesomeIcon icon={faChartLine} />
          </Button>
        </div>
        <div className='d-flex justify-content-between align-items-center watch-list-item'>
          <Button className='rounded-0 watch-list-item-btn' variant='danger'>
            X
          </Button>
          <span className='text-white p-2'>F</span>
          <Button
            className='rounded-0 watch-list-item-btn'
            variant='dark'
            onClick={() => {
              this.props.changeStockProfileData('f');
            }}
          >
            <FontAwesomeIcon icon={faChartLine} />
          </Button>
        </div>
      </div>
    );
  }
}

export default WatchList;
