// COMPONENTS
import React, { Component, Fragment } from 'react';
import Navbar from '../layouts/Navbar.jsx';
import Footer from '../layouts/Footer.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StockProfile from '../components/StockProfile.jsx';
import Sidebar from '../layouts/Sidebar.jsx';
import axios from 'axios';

// CSS STYLES
import './Home.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStock: 'CLDR',
      showWatchList: false
    };
    this.changeStockProfileData = this.changeStockProfileData.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://woocommercereact.local/wp-json/wc/v3/products/', {
        auth: {
          username: 'ck_890c5c4820effc5214e08b6586e55f15f35ca7ba',
          password: 'cs_9f7cfdfdfc19094545ec23d34973914b98cc5109'
        }
      })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  changeStockProfileData = stockSymbol => {
    this.setState({
      currentStock: stockSymbol
    });
  };

  render() {
    const { currentStock } = this.state;
    return (
      <Fragment>
        <Navbar />
        {/* <Button id='display-sidebar-btn' variant='danger'>
          Hello World
        </Button> */}
        <Container fluid>
          <Row className='position-relative'>
            <Col id='sidebar-column' className='bg-dark d-none d-sm-block p-0'>
              <Sidebar changeStockProfileData={this.changeStockProfileData} />
            </Col>
            <Col style={{ maxWidth: 'auto' }} className='p-0'>
              <StockProfile currentStock={currentStock} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
