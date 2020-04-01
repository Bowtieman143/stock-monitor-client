import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <div className='bg-dark text-white'>
          <Container>
            <Row className='py-3'>
              <Col xs={12} md={4} className='mt-3 mt-md-auto'>
                he industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was{' '}
              </Col>
              <Col xs={12} md={4} className='mt-3 mt-md-auto'>
                he industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was{' '}
              </Col>
              <Col xs={12} md={4} className='mt-3 mt-md-auto'>
                he industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was{' '}
              </Col>
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
}

export default Footer;
