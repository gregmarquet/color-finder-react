import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

import './Chart.css';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        datasets: [{
          data: [
            this.props.r, 
            this.props.j, 
            this.props.v, 
            this.props.b],
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
        <div className="container">
          <h1 id="title" className="header__title">Vos Couleurs</h1>
          <h2 id="subtitle" className="header__subtitle">D'après les resultats du test, vos couleurs sont:</h2>
        </div>
        <div className="doughnut">
          <Doughnut
            data={this.state.data}
            options={this.state.options}
          />
          <button 
            className="button-chart" 
            onClick={this.props.handleButtonChart}>Recommencer</button>
        </div>
      </div>
    )
  }
}

export default Chart;