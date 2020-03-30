// Component
import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import SearchStock from '../components/SearchStock.jsx';
import StockGraph from '../components/StockGraph.jsx';

import axios from 'axios';

// Component css
import './Navbar.css';

class MainNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      doesExist: false,
      searchedStockSymbol: '',
      companyName: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const currentSearch = event.target.value;
    this.setState({
      searchedStockSymbol: currentSearch
    })
    if (currentSearch === '') {
      this.setState({
        isSearching: false,
        doesExist: false,
        graphData: null,
        companyData: null
      });
    } else {
        this.setState({
         isSearching: true
        });
        axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${currentSearch.toUpperCase()}`)
          .then((result) => {
            if (Object.keys(result.data).length === 0 && result.data.constructor === Object) {
              this.setState({
                doesExist: false,
                graphData: null,
              });
            } else {
              this.setState({
                graphData: this.getHistoricalData(result.data.historical),
                doesExist: true,
              });
              this.getCompanyData(currentSearch.toUpperCase())
            }
          })
          .catch((err) => {
            console.log(err);
          });
    }
  }

  getHistoricalData = (stockHistoricalPriceArray) => {
    const closingDates = stockHistoricalPriceArray.reverse();
    const closingWeekPrices = [];

    for (let i = 0; i < 30; i++) {
      let dataPoint = {};
      dataPoint.x = closingDates[i].date;
      dataPoint.y = closingDates[i].close;
      closingWeekPrices.push(dataPoint);
    }
    return closingWeekPrices;
  }

  getCompanyData = (stockSymbol) => {
    const stockProfile = axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${stockSymbol.toUpperCase()}`);

    Promise.all([stockProfile])
     .then((result) => {
       this.setState({
         stockProfile: result[0]
       })
     })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { doesExist, isSearching, searchedStockSymbol, graphData,
      stockProfile} = this.state;

    return (
      <Fragment>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
            </Nav>
            <Form inline>
              <FormControl type='text'
                placeholder='Search'
                className='mr-sm-2'
                value={searchedStockSymbol}
                onChange={this.handleChange}
              />
              { isSearching ?
                <Container className='d-lg-none text-white my-4'>
                  <Row>
                    <Col md={3}>
                      <StockGraph graphData={graphData} />
                    </Col>
                    <Col md={9}>
                    { doesExist ?
                      <SearchStock
                        stockProfile={stockProfile}/>
                        :
                        <Alert variant='danger'>
                          Sorry we could not find that stock.. Please make sure you are typing the right symbol.
                        </Alert>
                    }
                    </Col>
                  </Row>
                </Container>
                :
                null
              }
            </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        { isSearching ?
          <Container id='current-stock-search-result'
            className='bg-dark rounded text-white shadow-lg d-none d-md-block py-4'>
            <Row>
              <Col md={4}>
                <StockGraph graphData={graphData} />
              </Col>
              <Col md={8}>
              { doesExist ?
                <SearchStock
                  stockProfile={stockProfile}/>
                  :
                  <Alert variant='danger'>
                    Sorry we could not find that stock.. Please make sure you are typing the right symbol.
                  </Alert>
              }
              </Col>
            </Row>
          </Container>
           :
          null
        }
      </Fragment>
    );
  }

}

export default MainNavbar;
