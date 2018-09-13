import React from 'react';

import './Question.css';
// import { questions } from '../../questions';


function Question(props) {
    return (      
      props.questions.map((question, index) => {
        return (
          <div className="questions" key={index}>
            <p className="questions-text">
              {question['question-text']}
            </p>
            {
              question.options.map(option => {
                return (
                  <div className="options" key={option.id}>
                    <input 
                      type="radio" 
                      name={option.name} 
                      value={option.value} 
                      id={option.id} />
                    <label 
                      htmlFor={option.id}>
                      {option.label}
                    </label>
                  </div>
                )
              })
            }
          </div>
        )
      })
    )      
}



export default Question