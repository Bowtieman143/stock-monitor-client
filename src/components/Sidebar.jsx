import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import NewsCarousel from './NewsCarousel.jsx';
import RatingCard from './RatingCard';

import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { stockNews } = this.props;
    return (
      <Col id='sidebar' xs={12} md={4} className='px-3'>
        <div className='rounded-large shadow-lg'>
          <h5 className='w-100 bg-dark text-white text-center card-header-rounded-top py-2'>This is the header</h5>
          <div id='news-articles' className='px-3'>
            <NewsCarousel stockNews={stockNews}/>
          </div>
        </div>
        <div className='rounded-large shadow-lg my-3'>
          <h5 className='w-100 bg-dark text-white text-center card-header-rounded-top py-2'>Ratings</h5>
          <div className='d-flex justify-content-center text-center px-3' style={{flexWrap: 'wrap'}}>
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
          </div>
        </div>
      </Col>
    );
  }

}

export default Sidebar;
