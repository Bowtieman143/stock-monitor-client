// COMPONENTS
import React, { Fragment } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../layouts/Navbar.jsx';
import Footer from '../layouts/Footer.jsx';
import WatchListCard from '../components/WatchListCard.jsx';

// CSS STYLES
import './Home.css';

function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <Row>
          <Col xs={12} md={9}>Left</Col>
          <Col xs={12} md={3}>Right</Col>
        </Row>
      </Container>
      <CardGroup id='watch-list-card-container' className="justify-content-left">
        <WatchListCard />
        <WatchListCard />
        <WatchListCard />
        <WatchListCard />
        <WatchListCard />
        <WatchListCard />
        <WatchListCard />
        <WatchListCard />
        <WatchListCard />
      </CardGroup>
      <Footer />
    </Fragment>
  );
}

export default HomePage;
