import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import StockGraph from './StockGraph.jsx';

import './Primary.css';

class Primary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { stockQuote, stockProfile, stockRatings, stockHistoricalPrice } = this.props;

    return (
      <Col id='primary' xs={12} md={8} className='p-3 p-md-4'>
        <div className="shadow-lg rounded-large pb-4">
          <h5 className='w-100 bg-dark text-white text-center card-header-rounded-top py-2'>This is the header</h5>
          <div className='px-2 px-md-4'>
            <StockGraph height={150} mobileHeight={250} />
          </div>
          <Nav className='justify-content-center mt-4' variant="pills" defaultActiveKey="#">
            <Nav.Item>
              <Nav.Link href="#">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Option 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Col>
    );
  }

}

export default Primary;
