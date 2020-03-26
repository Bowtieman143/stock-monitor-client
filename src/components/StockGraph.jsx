import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './StockGraph.css'

class StockGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  static defaultProps = {
    height: 200,
    mobileHeight: 300,
    graphData: {
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
          label: 'CLDR',
          data: [12, 19, 3, 5, 2, 3, 10, 19, 3, 5, 2, 3],
          backgroundColor: ['rgba(54, 162, 235, 0.3)'],
          borderColor: ['rgba(54, 162, 235, 1)'],
          borderWidth: 1
        },
        {
          label: 'FB',
          data: [32, 2, 8, 15, 12, 33, 30, 9, 3, 45, 8, 2],
          backgroundColor: ['rgba(235, 20, 64, 0.3)'],
          borderColor: ['rgba(235, 20, 64, 1)'],
          borderWidth: 1
        }
      ]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
      }
    }
  }

  render() {
    const { height, mobileHeight, graphData } = this.props;
    const windowWidth = window.innerWidth;

    return (
      <div className='chart bg-light'>
        <Line
          height={windowWidth > 1000 ? height : mobileHeight}
          data={graphData.data}
          options={this.props.options}
        />
      </div>
    );
  }

}

export default StockGraph;
