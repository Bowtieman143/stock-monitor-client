import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

class Sidebar extends Component {
  render() {
    return (
      <div className='py-4'>
        <Nav defaultActiveKey='/home' className='flex-column'>
          <Nav.Link className='text-white' href='/home'>
            Active
          </Nav.Link>
          <Nav.Link className='text-white' eventKey='link-1'>
            Link
          </Nav.Link>
          <Nav.Link className='text-white' eventKey='link-2'>
            Link
          </Nav.Link>
        </Nav>
      </div>
    );
  }
}

export default Sidebar;
