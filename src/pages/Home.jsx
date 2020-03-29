// COMPONENTS
import React, { Component, Fragment } from 'react';
import Navbar from '../layouts/Navbar.jsx';
import Footer from '../layouts/Footer.jsx';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StockProfile from '../components/StockProfile.jsx';
import WatchListContainer from '../components/WatchListContainer.jsx';

// CSS STYLES
import './Home.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWatchList: false
    };
  }
  render() {
    const { showWatchList } = this.state;
    return (
      <Fragment>
        <Navbar />
        <div className="position-relative">
          <Container className='position-absolute' style={{zIndex: 1, top: 20, maxWidth: '295px'}}>
            <Row>
              { showWatchList ?
                <Col id='watchListCardContainer' className='shadow-lg p-0'>
                  <WatchListContainer />
                </Col>
                  :
                null
              }
              <Col id='watchlistViewBtnContainer' className='d-flex align-items-center p-0'>
                <Button id='watchlistViewBtn' onClick={() => {
                  if (showWatchList === true) {
                    this.setState({showWatchList: false});
                  } else {
                    this.setState({showWatchList: true});
                  }
                }}>
                  Watchlist
                </Button>
              </Col>
            </Row>
          </Container>
          <StockProfile />
        </div>
        <Footer />
      </Fragment>
    );
  }

}

export default HomePage;
