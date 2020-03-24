import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import './ViewNewsTab.css';

class ViewNewsTab extends Component {
  hideArticlesContainer(){
    const articleContainer = document.getElementById('news-articles');
    if (articleContainer.style.display === 'none') {
      articleContainer.style.display = 'block';
      console.log('This is not displayed');
    } else {
      articleContainer.style.display = 'none';
      console.log('This is displayed');
    }
  }
  render() {
    return (
      <div className='text-center d-md-none mt-5' style={{borderBottom: '3px solid #343a40'}}>
        <Button variant='dark' id='view-news-btn' className='px-4 py-2' onClick={(this.hideArticlesContainer)}>View News</Button>
      </div>
    );
  }

}

export default ViewNewsTab;
