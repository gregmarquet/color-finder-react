import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

import './Chart.css';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        datasets: [{
          data: [
            Math.round(this.props.r / 0.13),
            Math.round(this.props.j / 0.13),
            Math.round(this.props.v / 0.13),
            Math.round(this.props.b / 0.13)
          ],
          backgroundColor: [
            'rgba(233, 56, 56, .7)',
            'rgba(255, 249, 69, .7)',
            'rgba(103, 220, 60, .7)',
            'rgba(5, 55, 141, .7)'
          ],
          borderWidth: 0
        }],
        labels: [
          'Rouge',
          'Jaune',
          'Vert',
          'Bleu'
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        tooltips: {
          mode: 'label',
          callbacks: {
            label: function (tooltipItem, data) {
              return data['datasets'][0]['data'][tooltipItem['index']] + '%';
            }
          }
        }
      }
    }
  }

  render() {
    return (
      <div className="chart">
        <div className="container doughnut">
          <Pie
            data={this.state.data}
            options={this.state.options}
          />
          {
            //<button
            //   className="button-chart"
            //   onClick={this.props.handleButtonChart}>Recommencer</button>//
          }
        </div>
      </div>
    )
  }
}

export default Chart;