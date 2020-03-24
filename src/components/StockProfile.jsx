import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ViewNewsTab from './ViewNewsTab.jsx';
import NewsCarousel from './NewsCarousel.jsx';

class StockProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={12} md={8} className='p-0'>
            <Jumbotron fluid className='mb-5'>
              <Container>
                <h1>Fluid jumbotron</h1>
                <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
              </Container>
            </Jumbotron>
            <Container>
              <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
                <Tab eventKey='home' title='Home'>
                  <p>Lrdjklfjdskl jf jkdsl f kldsf kdlsn n lfndl nndklsfjdkl lj  jfkldsj fdl l jflkdsj kldn fdslkj kld fjdsl jf fkjl </p>
                </Tab>
                <Tab eventKey='profile' title='Profile'>
                  <p>Lrdjklfjdskl jf jkdsl f kldsf kdlsn n lfndl nndklsfjdkl lj  jfkldsj fdl l jflkdsj kldn fdslkj kld fjdsl jf fkjl </p>
                </Tab>
                <Tab eventKey='contact' title='Contact'>
                  <p>Lrdjklfjdskl jf jkdsl f kldsf kdlsn n lfndl nndklsfjdkl lj  jfkldsj fdl l jflkdsj kldn fdslkj kld fjdsl jf fkjl </p>
                </Tab>
              </Tabs>
            </Container>
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
