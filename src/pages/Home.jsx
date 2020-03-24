// COMPONENTS
import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from '../layouts/Navbar.jsx';
import Footer from '../layouts/Footer.jsx';
import NewsCarousel from '../components/NewsCarousel.jsx';
import ViewNewsTab from '../components/ViewNewsTab.jsx';
import WatchListContainer from '../components/WatchListContainer.jsx';

// CSS STYLES
import './Home.css';

function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <Container fluid className=''>
        <Row>
          <Col xs={12} md={8} className='p-0'>
            <Jumbotron fluid className='mb-5'>
              <Container>
                <h1>Fluid jumbotron</h1>
                <p>
                  This is a modified jumbotron that occupies the entire horizontal space of
                  its parent.
                </p>
              </Container>
            </Jumbotron>
          </Col>
          <Col id='sidebar' xs={12} md={4} className='px-3'>
            <ViewNewsTab />
            <div id="news-articles">
              <NewsCarousel />
            </div>
          </Col>
        </Row>
      </Container>
      <WatchListContainer />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
