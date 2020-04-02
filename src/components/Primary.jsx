import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Media from 'react-bootstrap/Media';
import StockGraph from './StockGraph.jsx';

import './Primary.css';

class Primary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [],
      timeLapse: 7
    };
  }

  getHistoricalData = (stockHistoricalPriceArray, time) => {
    const stockHistoricalPriceArrayInOrder = [
      ...stockHistoricalPriceArray
    ].reverse();

    const closingWeekPrices = [];

    for (let i = 0; i < time; i++) {
      let dataPoint = {};
      dataPoint.x = stockHistoricalPriceArrayInOrder[i].date;
      dataPoint.y = stockHistoricalPriceArrayInOrder[i].close;
      closingWeekPrices.push(dataPoint);
    }
    return closingWeekPrices;
  };

  componentDidUpdate(prevProps, prevState) {
    const { stockHistoricalPrice } = this.props;
    const { timeLapse } = this.state;
    if (prevProps !== this.props) {
      this.setState({
        graphData: this.getHistoricalData(
          stockHistoricalPrice.data.historical,
          timeLapse
        )
      });
    }
  }

  render() {
    const { graphData } = this.state;
    const { stockHistoricalPrice, stockProfile } = this.props;
    return (
      <Col id='primary' xs={12} md={8} className='px-3'>
        <div className='shadow-lg rounded-large pb-4'>
          <h5 className='w-100 bg-dark text-white text-center card-header-rounded-top py-2'>
            This is the header
          </h5>
          <div className='px-2 px-md-4'>
            <StockGraph height={100} mobileHeight={250} graphData={graphData} />
          </div>
          <Nav
            className='justify-content-center mt-4'
            variant='pills'
            defaultActiveKey='link-1'
          >
            <Nav.Item>
              <Nav.Link
                onSelect={() => {
                  this.setState({
                    graphData: this.getHistoricalData(
                      stockHistoricalPrice.data.historical,
                      7
                    ),
                    timeLapse: 7
                  });
                }}
                eventKey='link-1'
              >
                Week
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onSelect={() => {
                  this.setState({
                    graphData: this.getHistoricalData(
                      stockHistoricalPrice.data.historical,
                      30
                    ),
                    timeLapse: 30
                  });
                }}
                eventKey='link-2'
              >
                Month
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onSelect={() => {
                  this.setState({
                    graphData: this.getHistoricalData(
                      stockHistoricalPrice.data.historical,
                      365
                    ),
                    timeLapse: 365
                  });
                }}
                eventKey='link-3'
              >
                Year
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className='shadow-lg rounded-large pb-4 my-3'>
          <h5 className='w-100 bg-dark text-white text-center card-header-rounded-top py-2'>
            Company Profile
          </h5>
          <div className='px-4'>
            {stockProfile.data !== undefined ? (
              <Media>
                <img
                  width={64}
                  height={64}
                  className='mr-3'
                  src={stockProfile.data.profile.image}
                  alt='Generic placeholder'
                />
                <Media.Body>
                  <h5>{stockProfile.data.profile.companyName}</h5>
                  <p>{stockProfile.data.profile.description}</p>
                </Media.Body>
              </Media>
            ) : null}
          </div>
        </div>
      </Col>
    );
  }
}

export default Primary;
