import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        datasets: [{
          data: [4, 3, 1, 1],
          backgroundColor: [
            'rgba(233, 56, 56, .7)',
            'rgba(255, 249, 69, .7)',
            'rgba(103, 220, 60, .7)',
            'rgba(5, 55, 141, .7)'
          ]
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
        <Doughnut
          data={this.state.data}
          options={this.state.options}
        />
      </div>
    )
  }
}

export default Chart;