import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Media from 'react-bootstrap/Media';

class SearchStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containsContent: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { stockProfile } = this.props;

    if (prevProps.stockProfile !== stockProfile) {
      this.setState({
        containsContent: true
      });
    }
  }

  render() {
    const { containsContent } = this.state;
    const { stockProfile } = this.props;
    console.log(stockProfile);
    return (
      <Fragment>
        {containsContent ? (
          <Media className='mt-3 mt-md-mt-1'>
            <img
              width={32}
              height={32}
              className='mr-3'
              src={stockProfile.data.profile.image}
              alt='Generic placeholder'
            />
            <Media.Body>
              <h4>{stockProfile.data.profile.companyName}</h4>
              <p className='mb-1'>{stockProfile.data.profile.description}</p>
              <a className='d-block' href={stockProfile.data.profile.website}>
                {stockProfile.data.profile.website}
              </a>
              <Button className='mt-3' variant='primary'>
                Add to Watchlist
              </Button>
            </Media.Body>
          </Media>
        ) : null}
      </Fragment>
    );
  }
}

export default SearchStock;
