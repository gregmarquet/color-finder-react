import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import { questions } from './questions';

class App extends Component {
  constructor() {
    super()

    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    this.setState({ questions })
  }

  render() {
    return (
      <div className="App main-container container">
        <Header />
        <Form questions={this.state.questions} />
      </div>
    );
  }
}

export default App;
