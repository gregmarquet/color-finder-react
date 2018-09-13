import React, { Component } from 'react';
import Question from '../Question/Question';
import './Form.css';



class Form extends Component {

  render() {
    return (
      <div id="container" className="container">
        <form 
          id="colors" 
          onSubmit={this.props.handleSubmit}>
          <Question questions={this.props.questions}/>
          <button type="submit">Soumettre</button>
        </form>
      </div>
    );
  }
  
}

export default Form;