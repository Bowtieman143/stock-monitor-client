import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import StockGraph from './StockGraph.jsx';

import './Primary.css';

class Primary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: []
    };
  }

  getWeekOfData = (stockTimeSheet) => {
    const closingDates = stockTimeSheet.reverse();
    const closingWeekPrices = [];

    for (let i = 0; i < 30; i++) {
      let dataPoint = {};
      dataPoint.x = closingDates[i].date;
      dataPoint.y = closingDates[i].close;
      closingWeekPrices.push(dataPoint);
    }
    return closingWeekPrices;
  }

  componentDidUpdate(prevProps, prevState) {
    const { stockHistoricalPrice } = this.props;

    if (prevProps.stockHistoricalPrice !== stockHistoricalPrice) {
      this.setState({
        graphData: this.getWeekOfData(stockHistoricalPrice.data.historical)
      });
    }
  }

  render() {
    const { graphData } = this.state;

    return (
      <Col id='primary' xs={12} md={8} className='p-3 p-md-4'>
        <div className="shadow-lg rounded-large pb-4">
          <h5 className='w-100 bg-dark text-white text-center card-header-rounded-top py-2'>This is the header</h5>
          <div className='px-2 px-md-4'>
            <StockGraph height={100} mobileHeight={250} graphData={graphData} />
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
