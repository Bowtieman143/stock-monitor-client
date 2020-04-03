// COMPONENTS
import React, { Component, Fragment } from 'react';
import Navbar from '../layouts/Navbar.jsx';
import Footer from '../layouts/Footer.jsx';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StockProfile from '../components/StockProfile.jsx';
import WatchList from '../components/WatchList.jsx';
import Sidebar from '../layouts/Sidebar.jsx';

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

  changeStockProfileData = stockSymbol => {
    this.setState({
      currentStock: stockSymbol
    });
  };

  render() {
    const { showWatchList, currentStock } = this.state;
    return (
      <Fragment>
        <Navbar />
        <Container fluid>
          <Row>
            <Col
              style={{ maxWidth: '15%' }}
              className='bg-dark d-none d-sm-block'
            >
              <Sidebar />
            </Col>
            <Col style={{ maxWidth: '85%' }} className='p-0'>
              <Container
                className='position-fixed'
                style={{ zIndex: 1, top: 100, maxWidth: '295px' }}
              >
                <Row>
                  {showWatchList ? (
                    <Col id='watchListCardContainer' className='shadow-lg p-0'>
                      <WatchList
                        changeStockProfileData={this.changeStockProfileData}
                      />
                    </Col>
                  ) : null}
                  <Col
                    id='watchlistViewBtnContainer'
                    className='d-flex align-items-center p-0'
                  >
                    <Button
                      id='watchlistViewBtn'
                      onClick={() => {
                        if (showWatchList === true) {
                          this.setState({ showWatchList: false });
                        } else {
                          this.setState({ showWatchList: true });
                        }
                      }}
                    >
                      Watchlist
                    </Button>
                  </Col>
                </Row>
              </Container>
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
