// COMPONENTS
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

// COMPONENT STYLES
import './WatchListCard.css';

class WatchListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card className='watch-list-card d-block m-0'>
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          <Button variant='primary' className='m-3 btn-sm'>View Profile</Button>
        </ListGroup>
      </Card>
    );
  }

}

export default WatchListCard;
