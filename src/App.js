import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import { questions } from './questions';
import Chart from './components/Chart/Chart';

let r = 0
let j = 0
let v = 0
let b = 0

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

  handleButtonChart() {
    document.location.reload()
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      quizDone: true
    })

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

    console.log(r, j, v, b)
  }

  render() {
    if(this.state.quizDone) {
      return (
        <div className="App main-container container">
          <Chart 
          r={r} j={j} v={v} b={b} 
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
