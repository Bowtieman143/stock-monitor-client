import React, { Component, Fragment } from 'react';

import Media from 'react-bootstrap/Media';
import Spinner from 'react-bootstrap/Spinner';

import './NewsCarousel.css'

class NewsCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containsData: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({
        containsData: true
      })
    }
  }

  render() {
    const { stockNews } = this.props;
    const { containsData } = this.state;


    return (
      <Fragment>
        { containsData ?
          stockNews.data.data.slice(0, 10).map((article, idx) =>
            <Media key={idx} className='alternate-articles p-0'>
              <Media.Body className='px-2'>
                <h6>{article.title.substring(0,25).concat('...')}</h6>
                <a href={article.news_url}>{article.news_url.substring(0,25).concat('...')}</a>
                <p>{ article.text === null ?
                  null
                    :
                  article.text.substring(0,75).concat('...')}
                </p>
              </Media.Body>
            </Media>
          )
            :
          <Spinner animation="grow" />
        }
      </Fragment>

    );
  }

}

export default NewsCarousel;
