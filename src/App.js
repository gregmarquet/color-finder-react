import React, { Component } from 'react';
import Chart from 'chart.js';
import './App.css';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import { questions } from './questions';

class App extends Component {
  constructor() {
    super()

    this.state = {
      questions: [],
      quizDone: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({ questions })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      quizDone: true
    })
    let r = 0
    let j = 0
    let v = 0
    let b = 0

    for (let i = 1; i < 10; i++) {
      if (e.target.elements[`question${i}`].value === 'r') {
        r += 1
      } else if (e.target.elements[`question${i}`].value === 'j') {
        j += 1
      } else if (e.target.elements[`question${i}`].value === 'v') {
        v += 1
      } else if (e.target.elements[`question${i}`].value === 'b') {
        b += 1
      }
    }

    console.log(r, j, v,b)
  }

  render() {
    if(this.state.quizDone) {
      return (
        <div className="App main-container container">
          <p>Done</p>
        </div>
      ) 
    } else {
      return (
        <div className="App main-container container">
          <Header />
          <Form 
            questions={this.state.questions}
            handleSubmit={this.handleSubmit} />
        </div>
      )
    }
    
  }
}

export default App;
