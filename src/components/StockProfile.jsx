import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NewsCarousel from './NewsCarousel.jsx';
import ViewNewsTab from './ViewNewsTab.jsx';
import StockGraph from './StockGraph.jsx'

import './StockProfile.css'

class StockProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
      <Container fluid>
        <Row>
          <Col id='primary' xs={12} md={8} className='p-3 p-md-4'>
            <div className="shadow-lg rounded-large pb-4">
              <h5 className='w-100 bg-dark text-white text-center card-header-rounded-top py-2'>This is the header</h5>
              <div className='px-2 px-md-4'>
                <StockGraph height={150} />
              </div>
              <Nav className='justify-content-center mt-4' variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Option 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col id='sidebar' xs={12} md={4} className='py-4 px-3'>
            <ViewNewsTab />
            <div className='rounded-large shadow-lg'>
              <h5 className='w-100 bg-dark text-white text-center card-header-rounded-top py-2'>This is the header</h5>
              <div id='news-articles' className='px-3'>
                <NewsCarousel />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default StockProfile;
