import React, { Component, Fragment } from 'react';
import Media from 'react-bootstrap/Media';
import axios from 'axios';

import './NewsCarousel.css'

class NewsCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArticles: []
    };
  }
  componentDidMount() {
    axios.get('https://stocknewsapi.com/api/v1/category?section=general&items=50&token=pudtkelo3pemsxaegt7pa4edyfcaref32lx9utoo&sortby=trending')
      .then((data) => {
        console.log(data.data.data[0]);
        this.setState({
          newsArticles: data.data.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  render() {
    const { newsArticles } = this.state;
    const displayNewsArticles = newsArticles.map((article, idx) =>
      <Media key={idx} className='alternate-articles p-3'>
        <img width={64} height={64} className='mr-3' src={article.image_url} alt='Generic placeholder'/>
        <Media.Body>
          <h5>{article.title.substring(0,25).concat('...')}</h5>
          <p>{article.text.substring(0,75).concat('...')}</p>
        </Media.Body>
      </Media>
    );

    return (
      <Fragment>
        { displayNewsArticles }
      </Fragment>
    );
  }

}

export default NewsCarousel;
