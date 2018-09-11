import React, { Component } from 'react';
import './App.css';

import { Header } from './components/Header/Header';
import { Question } from './components/Question/Question';

class App extends Component {
  render() {
    return (
      <div className="App main-container">
        <Header />
        <div id="container" class="container">
          <form id="colors">
            <Question />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
