import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './StockGraph.css';

class StockGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphConfig: {
        data: {
          datasets: [
            {
              label: '# of Votes',
              data: [],
              backgroundColor: ['rgba(255, 50, 24, 0.5)'],
              lineTension: 0
            }
          ]
        },
        options: {
          responsive: true,
          legend: {
            display: true,
            position: 'top'
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: false
                }
              }
            ],
            xAxes: [
              {
                type: 'time',
                distribution: 'series'
              }
            ]
          }
        }
      }
    };
  }

  static defaultProps = {
    height: 200,
    mobileHeight: 150
  };

  componentDidUpdate(prevProps, prevState) {
    const { graphData } = this.props;

    if (prevProps !== this.props) {
      let newGraphConfig = Object.assign({}, this.state.graphConfig);
      newGraphConfig.data.datasets[0].data = graphData;
      this.setState({
        graphConfig: newGraphConfig
      });
    }
  }

  render() {
    const { height, mobileHeight } = this.props;
    const { graphConfig } = this.state;
    const windowWidth = window.innerWidth;

    return (
      <div className='chart'>
        <Line
          height={windowWidth > 1000 ? height : mobileHeight}
          data={graphConfig.data}
          options={graphConfig.options}
        />
      </div>
    );
  }
}

export default StockGraph;
