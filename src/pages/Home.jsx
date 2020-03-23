// COMPONENTS
import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../layouts/Navbar.jsx';
import Footer from '../layouts/Footer.jsx';
import NewsCarousel from '../components/NewsCarousel.jsx';
import WatchListContainer from '../components/WatchListContainer.jsx';

// CSS STYLES
import './Home.css';

function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <Container fluid className=''>
        <Row>
          <Col xs={12} md={8}>Left</Col>
          <Col id='sidebar' xs={12} md={4} className='p-0'>
            <NewsCarousel />
          </Col>
        </Row>
      </Container>
      <WatchListContainer />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
