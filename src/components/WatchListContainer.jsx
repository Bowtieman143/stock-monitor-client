import React, { Component, Fragment } from 'react';
import WatchListCard from './WatchListCard.jsx';

class WatchListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <div id='watch-list-card-container' className="justify-content-left">
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
        </div>
      </Fragment>
    );
  }

}

export default WatchListContainer;
