import React, { Component } from 'react';
import Question from '../Question/Question';
import './Form.css';



class Form extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('got it!')
  }

  render() {
    return (
      <div id="container" className="container">
        <form id="colors" onSubmit={this.handleSubmit}>
          <Question questions={this.props.questions}/>
          <button type="submit">Soumettre</button>
        </form>
      </div>
    );
  }
  
}

export default Form;