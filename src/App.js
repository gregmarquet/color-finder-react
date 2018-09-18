import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import { questions } from './questions';
import Chart from './components/Chart/Chart';


class App extends Component {
  constructor() {
    super()

    this.state = {
      questions: [],
      quizDone: false
    }

    this.r = 0
    this.j = 0
    this.v = 0
    this.b = 0

  }

  componentDidMount() {
    this.setState({ questions })
  }

  handleButtonChart() {
    document.location.reload()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      quizDone: true
    })

    for (let i = 1; i < 10; i++) {
      if (e.target.elements[`question${i}`].value === 'r') {
        this.r += 1
      } else if (e.target.elements[`question${i}`].value === 'j') {
        this.j += 1
      } else if (e.target.elements[`question${i}`].value === 'v') {
        this.v += 1
      } else if (e.target.elements[`question${i}`].value === 'b') {
        this.b += 1
      }
    }

    console.log(this.r, this.j, this.v, this.b)
  }

  render() {
    if(this.state.quizDone) {
      return (
        <div className="App main-container container">
          <Chart 
          r={this.r} j={this.j} v={this.v} b={this.b} 
          handleButtonChart={this.handleButtonChart} />
          
        </div>
      ) 
    } else {
      return (
        <div className="App main-container container">
          <Header />
          <Form 
            questions={this.state.questions}
            handleSubmit={this.handleSubmit}/>
        </div>
      )
    }
    
  }
}

export default App;
