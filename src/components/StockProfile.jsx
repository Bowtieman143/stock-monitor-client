import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { XYPlot, LineSeries } from 'react-vis';
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
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 7},
      {x: 9, y: 2},
      {x: 10, y: 7},
      {x: 11, y: 6},
      {x: 12, y: 3},
      {x: 13, y: 2},
      {x: 14, y: 7},
      {x: 15, y: 4},
      {x: 16, y: 9}
    ];

    return (
      <Container fluid>
        <Row>
          <Col id='primary' xs={12} md={8} className='px-0 px-md-4'>
            <StockGraph />
            <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example' className='mt-5'>
              <Tab eventKey='home' title='Home'>
                <p>Lrdjklfjdskl jf jkdsl f kldsf kdlsn n lfndl nndklsfjdkl lj
                  jfkldsj fdl l jflkdsj kldn fdslkj kld fjdsl jf fkjl </p>
              </Tab>
              <Tab eventKey='profile' title='Profile'>
                <p>Lrdjklfjdskl jf jkdsl f kldsf kdlsn n lfndl nndklsfjdkl lj
                  jfkldsj fdl l jflkdsj kldn fdslkj kld fjdsl jf fkjl </p>
              </Tab>
              <Tab eventKey='contact' title='Contact'>
                <p>Lrdjklfjdskl jf jkdsl f kldsf kdlsn n lfndl nndklsfjdkl lj
                  jfkldsj fdl l jflkdsj kldn fdslkj kld fjdsl jf fkjl </p>
              </Tab>
            </Tabs>
          </Col>
          <Col id='sidebar' xs={12} md={4} className='px-0'>
            <ViewNewsTab />
            <div id='news-articles' className='px-0'>
              <NewsCarousel />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default StockProfile;
