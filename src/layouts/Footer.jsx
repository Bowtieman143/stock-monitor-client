import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Footer.css';

function Footer() {
  return (
    <Fragment>
      <div className='bg-dark text-white'>
        <Container>
          <Row className='py-3'>
            <Col xs={12} md={4} className='mt-3 mt-md-auto'></Col>
            <Col xs={12} md={4} className='mt-3 mt-md-auto'></Col>
            <Col xs={12} md={4} className='mt-3 mt-md-auto'></Col>
          </Row>
        </Container>
      </div>
      <div
        className='text-center py-2'
        style={{ background: '#222222', color: 'white' }}
      >
        Copyright Onload Development LLC 2020
      </div>
    </Fragment>
  );
}

export default Footer;
