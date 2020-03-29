import React, { Component, Fragment } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import WatchListCard from './WatchListCard.jsx';

class WatchListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        { /* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='ml-auto'>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */ }
        <CardGroup id='watch-list-card-container' className="justify-content-left">
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
        </CardGroup>
      </Fragment>
    );
  }

}

export default WatchListContainer;
