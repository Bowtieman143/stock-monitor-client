import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import StockGraph from './StockGraph.jsx';

import './Primary.css';

class Primary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [],
      timeLapse: null
    };
  }

  getHistoricalData = (stockHistoricalPriceArray, time) => {
    const stockHistoricalPriceArrayInOrder = [...stockHistoricalPriceArray].reverse();
    const closingWeekPrices = [];

    for (let i = 0; i < time; i++) {
      let dataPoint = {};
      dataPoint.x = stockHistoricalPriceArrayInOrder[i].date;
      dataPoint.y = stockHistoricalPriceArrayInOrder[i].close;
      closingWeekPrices.push(dataPoint);
    }
    return closingWeekPrices;
  }

  render() {
    const { graphData } = this.state;
    const { stockHistoricalPrice } = this.props;
    return (
      <Col id='primary' xs={12} md={8} className='p-3 p-md-4'>
        <div className="shadow-lg rounded-large pb-4">
          <h5 className='w-100 bg-dark text-white text-center card-header-rounded-top py-2'>This is the header</h5>
          <div className='px-2 px-md-4'>
            <StockGraph height={100} mobileHeight={250} graphData={graphData} />
          </div>
          <Nav className='justify-content-center mt-4' variant="pills" defaultActiveKey="#">
            <Nav.Item>
              <Nav.Link onClick={() => {
                  this.setState({
                    graphData: this.getHistoricalData(stockHistoricalPrice.data.historical, 7)
                  });
                }} href="#">
                Week
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  this.setState({
                    graphData: this.getHistoricalData(stockHistoricalPrice.data.historical, 30)
                  });
                }}
                eventKey="link-1">
                Month
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  this.setState({
                    graphData: this.getHistoricalData(stockHistoricalPrice.data.historical, 365)
                  });
                }}
                eventKey="link-2">
                Year
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Col>
    );
  }

}

export default Primary;
