import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class RatingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card className='shadow-sm m-1' style={{ width: '30%' }}>
        <Card.Body className='p-2'>
          <Card.Title>RCA</Card.Title>
          <Card.Text>
            <span style={{fontSize: '17px', color: 'red'}}>&#9733;</span>
            <span style={{fontSize: '17px', color: 'red'}}>&#9733;</span>
            <span style={{fontSize: '17px', color: 'red'}}>&#9733;</span>
            <span style={{fontSize: '17px', color: 'red'}}>&#9733;</span>
            <span style={{fontSize: '17px', color: 'red'}}>&#9733;</span>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

}

export default RatingCard;
