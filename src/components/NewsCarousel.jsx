import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';

class NewsCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfArticles: [1,1,1,1,1,1,1,,1,1,1,1,1]
    };
  }
  render() {
    const { numberOfArticles } = this.state;
    const displayArticles = numberOfArticles.map((article) => {
      return <Media className='py-2'>
              <img width={64} height={64} className="rounded mr-3" src="https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1608&q=80"/>
              <Media.Body>
                <h5>Media Heading</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                  ante sollicitudin commodo.
                </p></Media.Body></Media>
    });

    return (
      <div>
        { displayArticles }
      </div>
    );
  }

}

export default NewsCarousel;
