import React from 'react';

import './Question.css';
import { questions } from '../../questions';



function Question(props) {

  return (
    <div class="questions">
      <p class="questions-text">{questions[0]['question-text']}</p>
      <div class="options">
        <input 
          type="radio" 
          name={questions[0].options[0].name} 
          value={questions[0].options[0].value} 
          id={questions[0].options[0].id} />
        <label 
          for={questions[0].options[0].id}>
          {questions[0].options[0].label}
        </label>
      </div>
      <div class="options">
        <input
          type="radio"
          name={questions[0].options[1].name}
          value={questions[0].options[1].value}
          id={questions[0].options[1].id} />
        <label
          for={questions[0].options[1].id}>
          {questions[0].options[1].label}
        </label>
      </div>
      <div class="options">
        <input
          type="radio"
          name={questions[0].options[2].name}
          value={questions[0].options[2].value}
          id={questions[0].options[2].id} />
        <label
          for={questions[0].options[2].id}>
          {questions[0].options[2].label}
        </label>
      </div>
      <div class="options">
        <input
          type="radio"
          name={questions[0].options[3].name}
          value={questions[0].options[3].value}
          id={questions[0].options[3].id} />
        <label
          for={questions[0].options[3].id}>
          {questions[0].options[3].label}
        </label>
      </div>
    </div>
  )
}

export default Question