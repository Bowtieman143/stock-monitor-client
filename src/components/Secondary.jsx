import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import NewsCarousel from './NewsCarousel.jsx';
import RatingCard from './RatingCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faStar } from '@fortawesome/free-solid-svg-icons';

import './Secondary.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { stockNews, stockRatings } = this.props;

    return (
      <Col id='secondary' xs={12} md={4} className='px-3'>
        <div className='rounded-large shadow-lg'>
          <h5 className='w-100 bg-dark text-white text-center card-header-rounded-top py-2'>
            <span className='mr-2'>Articles</span>
            <FontAwesomeIcon icon={faNewspaper} size='sm' />
          </h5>
          <div id='news-articles' className='px-3'>
            <NewsCarousel stockNews={stockNews} />
          </div>
        </div>
        <div className='rounded-large shadow-lg my-3'>
          <h5 className='w-100 bg-dark text-white text-center card-header-rounded-top py-2'>
            <span className='mr-2'>Ratings</span>
            <FontAwesomeIcon icon={faStar} size='sm' />
          </h5>
          <div
            className='d-flex justify-content-center text-center px-3 py-2'
            style={{ flexWrap: 'wrap' }}
          >
            {Object.entries(stockRatings).length !== 0 && (
              <Fragment>
                <RatingCard
                  score={stockRatings.data.ratingDetails['ROA'].score}
                  recommendation={
                    stockRatings.data.ratingDetails['ROA'].recommendation
                  }
                  companyName='ROA'
                />
                <RatingCard
                  score={stockRatings.data.ratingDetails['P/B'].score}
                  recommendation={
                    stockRatings.data.ratingDetails['P/B'].recommendation
                  }
                  companyName='P/B'
                />
                <RatingCard
                  score={stockRatings.data.ratingDetails['DCF'].score}
                  recommendation={
                    stockRatings.data.ratingDetails['DCF'].recommendation
                  }
                  companyName='DCF'
                />
                <RatingCard
                  score={stockRatings.data.ratingDetails['P/E'].score}
                  recommendation={
                    stockRatings.data.ratingDetails['P/E'].recommendation
                  }
                  companyName='P/E'
                />
                <RatingCard
                  score={stockRatings.data.ratingDetails['ROE'].score}
                  recommendation={
                    stockRatings.data.ratingDetails['ROE'].recommendation
                  }
                  companyName='ROE'
                />
                <RatingCard
                  score={stockRatings.data.ratingDetails['D/E'].score}
                  recommendation={
                    stockRatings.data.ratingDetails['D/E'].recommendation
                  }
                  companyName='D/E'
                />
              </Fragment>
            )}
          </div>
        </div>
      </Col>
    );
  }
}

export default Sidebar;
