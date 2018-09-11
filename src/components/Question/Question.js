import React from 'react';

import './Question.css';

const questions = [
  {
    'question-text': 'Sur le plan professionnel vous êtes plutôt :',
    options: {
      name: 'question9',
      value: 'r',
      id: '1',
      label: 'Ambitieux'
    }
  }
]


function Question(props) {

  return (
    <div class="questions">
      <p class="questions-text">{questions[0]['question-text']}</p>
      <div class="options">
        <input 
          type="radio" 
          name={questions[0].options.name} 
          value={questions[0].options.value} 
          id={questions[0].options.id} />
        <label 
          for={questions[0].options.id}>
          {questions[0].options.label}
        </label>
      </div>
      <div class="options">
        <input type="radio" name="question9" value="j" id="2" />
        <label for="2">Plein d’idées</label>
      </div>
      <div class="options">
        <input type="radio" name="question9" value="v" id="3" />
        <label for="3">Méthodique</label>
      </div>
      <div class="options">
        <input type="radio" name="question9" value="b" id="4" />
        <label for="4">Pointilleux</label>
      </div>
    </div>
  )
}

export { Question }