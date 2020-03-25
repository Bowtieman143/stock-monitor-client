import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';

class SearchStock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { stockSymbol } = this.props;
    return (
      <Fragment>
        <p>Your have typed <strong>{ stockSymbol }</strong> for your stock</p>
        <p>is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's st versions of Lorem Ipsis simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's st versions of Lorem Ipsis simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's st versions of Lorem Ips</p>
        <Button variant="primary">Add to Watchlist</Button>
      </Fragment>
    );
  }

}

export default SearchStock;
