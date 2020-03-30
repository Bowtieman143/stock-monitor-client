import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class WatchListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id='watch-list-card-container' className="justify-content-left">
        <Card className='watch-list-card d-block m-0'>
          <Card.Header>AAPL</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            <Button variant='primary'
              onClick={() => {
                this.props.changeStockProfileData('aapl');
              }}>
              See Profile
            </Button>
          </ListGroup>
        </Card>
        <Card className='watch-list-card d-block m-0'>
          <Card.Header>X</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            <Button variant='primary'
              onClick={() => {
                this.props.changeStockProfileData('x');
              }}>
              See Profile
            </Button>
          </ListGroup>
        </Card>
        <Card className='watch-list-card d-block m-0'>
          <Card.Header>CLDR</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            <Button variant='primary'
              onClick={() => {
                this.props.changeStockProfileData('cldr');
              }}>
              See Profile
            </Button>
          </ListGroup>
        </Card>
      </div>
    );
  }

}

export default WatchListContainer;
