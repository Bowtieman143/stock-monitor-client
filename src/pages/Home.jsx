// COMPONENTS
import React, { Fragment } from 'react';
import Navbar from '../layouts/Navbar.jsx';
import Footer from '../layouts/Footer.jsx';
import NewsCarousel from '../components/NewsCarousel.jsx';
import StockProfile from '../components/StockProfile.jsx';
import ViewNewsTab from '../components/ViewNewsTab.jsx';
import WatchListContainer from '../components/WatchListContainer.jsx';

// CSS STYLES
import './Home.css';

function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <StockProfile />
      <WatchListContainer />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
