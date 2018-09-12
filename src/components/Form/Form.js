import React from 'react';
import Question from '../Question/Question';
import './Form.css';

function Form() {
  return (
    <div id="container" className="container">
      <form id="colors">
        <Question />
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}

export default Form;