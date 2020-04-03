import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import './RatingCard.css';

class RatingCard extends Component {
  render() {
    const { score, recommendation, companyName } = this.props;
    const starsArray = [];

    for (var i = 0; i < score; i++) {
      starsArray.push(true);
    }

    const starColor = ['#E74C3C', '#E67E22', '#F1C40F', '#2ECC71', '#27AE60'];
    const displayStars = starsArray.map((star, idx) => (
      <span key={idx} style={{ fontSize: '17px', color: starColor[score - 1] }}>
        &#9733;
      </span>
    ));
    return (
      <Card className='shadow-sm m-1 py-2' style={{ width: '30%' }}>
        <Card.Body className='p-1'>
          <Card.Title className='mb-1'>{companyName}</Card.Title>
          <Card.Text>{displayStars}</Card.Text>
        </Card.Body>
        <Card.Footer className='text-muted p-0' style={{ fontSize: '10px' }}>
          {recommendation}
        </Card.Footer>
      </Card>
    );
  }
}

export default RatingCard;
