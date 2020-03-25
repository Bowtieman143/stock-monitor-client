import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './StockGraph.css'

class StockGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3, 10, 19, 3, 5, 2, 3],
          backgroundColor: ['rgba(54, 162, 235, 0.2)'],
          borderColor: ['rgba(54, 162, 235, 1)'],
          borderWidth: 1
        },
        {
          label: '# of Votes',
          data: [2, 12, 1, 19, 6, 9, 2, 12, 1, 19, 6, 9],
          backgroundColor: ['rgba(54, 162, 235, 0.2)'],
          borderColor: ['rgba(54, 162, 235, 1)'],
          borderWidth: 1
        }]
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
    };
  }

  static defaultProps = {
    height: 300
  }

  render() {
    return (
      <div className='chart bg-light'>
        <Line
          height={this.props.height}
          data={this.state.data}
          options={this.state.options}
        />
      </div>
    );
  }

}

export default StockGraph;
