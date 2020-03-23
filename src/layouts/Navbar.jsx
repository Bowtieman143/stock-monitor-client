// Component
import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import SearchStock from '../components/SearchStock.jsx';

// Component css
import './Navbar.css';

class MainNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      searchedStockSymbol: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.value === '') {
      this.setState({
        searchedStockSymbol: event.target.value,
        isSearching: false
      });
    } else {
      this.setState({
        searchedStockSymbol: event.target.value,
        isSearching: true
      });
    }
  }

  render() {
    const { isSearching, searchedStockSymbol } = this.state;

    return (
      <Fragment>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container fluid>
            <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
            </Nav>
            <Form inline>
              <FormControl type='text'
                placeholder='Search'
                className='mr-sm-2'
                value={this.state.searchedStockSymbol}
                onChange={this.handleChange}
              />
              { isSearching ?
                <div className='d-lg-none text-white'>
                  <SearchStock stockSymbol={searchedStockSymbol} />
                </div>
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
            <SearchStock stockSymbol={searchedStockSymbol} />
          </Container>
          :
          null
        }
      </Fragment>
    );
  }

}

export default MainNavbar;
