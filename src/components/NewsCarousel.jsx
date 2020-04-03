import React, { Component, Fragment } from 'react';
import Media from 'react-bootstrap/Media';

import './NewsCarousel.css';

class NewsCarousel extends Component {
  render() {
    const { stockNews } = this.props;

    return (
      <Fragment>
        {stockNews.data.data.slice(0, 10).map((article, idx) => (
          <Media key={idx} className='alternate-articles p-0'>
            <Media.Body className='px-2'>
              <h6>{article.title.substring(0, 25).concat('...')}</h6>
              <a href={article.news_url}>
                {article.news_url.substring(0, 25).concat('...')}
              </a>
              <p>
                {article.text === null
                  ? null
                  : article.text.substring(0, 75).concat('...')}
              </p>
            </Media.Body>
          </Media>
        ))}
      </Fragment>
    );
  }
}

export default NewsCarousel;
