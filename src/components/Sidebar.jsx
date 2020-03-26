import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import NewsCarousel from './NewsCarousel.jsx';
import ViewNewsTab from './ViewNewsTab.jsx';

import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Col id='sidebar' xs={12} md={4} className='py-4 px-3'>
        <ViewNewsTab />
        <div className='rounded-large shadow-lg'>
          <h5 className='w-100 bg-dark text-white text-center card-header-rounded-top py-2'>This is the header</h5>
          <div id='news-articles' className='px-3'>
            <NewsCarousel />
          </div>
        </div>
      </Col>
    );
  }

}

export default Sidebar;
