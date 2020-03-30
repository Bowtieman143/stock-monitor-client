import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Sidebar from './Sidebar.jsx';
import Primary from './Primary.jsx';

import axios from 'axios';

import './StockProfile.css';

class StockProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStock: 'CLDR',
      containsAllCompanyData: false,
      stockProfile: {},
      stockRatings: {},
      stockQuote: {},
      stockHistoricalPrice: {},
      stockNews: {}
    };
  }

  componentDidMount() {
    this.getAllCurrentStockInformation(this.state.currentStock);
  }

  getAllCurrentStockInformation = (stockSymbol) => {
    const stockProfile = axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${stockSymbol.toUpperCase()}`);
    const stockRatings = axios.get(`https://financialmodelingprep.com/api/v3/company/rating/${stockSymbol.toUpperCase()}`);
    const stockQuote = axios.get(`https://financialmodelingprep.com/api/v3/quote/${stockSymbol.toUpperCase()}`);
    const stockHistoricalPrice = axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${stockSymbol.toUpperCase()}`);
    const stockNews = axios.get(`https://stocknewsapi.com/api/v1?tickers=${stockSymbol.toUpperCase()}&items=50&token=pudtkelo3pemsxaegt7pa4edyfcaref32lx9utoo`)

    Promise.all([stockProfile, stockRatings, stockQuote, stockHistoricalPrice, stockNews])
     .then((result) => {
       this.setState({
         containsAllCompanyData: true,
         stockProfile: result[0],
         stockRatings: result[1],
         stockQuote: result[2],
         stockHistoricalPrice: result[3],
         stockNews: result[4]
       });
     })
     .catch(error => console.log(`Error in promises ${error}`))
  }

  render() {
    const { stockQuote, stockProfile, stockRatings, stockHistoricalPrice, stockNews } = this.state;
    return (
      <Container className='py-5'>
        <Row>
          <Primary
            stockQuote={stockQuote}
            stockProfile={stockProfile}
            stockHistoricalPrice={stockHistoricalPrice}
          />
          <Sidebar
            stockRatings={stockRatings}
            stockNews={stockNews}
          />
        </Row>
      </Container>
    );
  }

}

export default StockProfile;
