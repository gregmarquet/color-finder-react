import React from 'react';
import PropTypes from 'prop-types';
import Question from '../Question/Question';
import QuestionCount from '../QuestionCount/QuestionCount';
import AnswerOption from '../AnswerOption/AnswerOption';
import ProgressBar from '../ProgressBar/ProgressBar';

import './Quiz.css';

const Fragment = React.Fragment;

function Quiz(props) {

  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answers={props.answers}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  function renderProgress() {
    return (((props.questionId - 1) * 100) / 12)
  }

  return (
    <Fragment>
      <div>
        <h1 className="header__title">Discover Your Colors</h1>
        <h2 className="header__subtitle">Fill in this questionnaire to discover your colors</h2>
      </div>
      <div className="container quiz-container">
        <ProgressBar progress={renderProgress()} />
        <QuestionCount
          counter={props.questionId}
          total={props.questionTotal}
        />
        <Question content={props.question} />
        <ul className="answerOptions">
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
        <div className="bottom">
          {props.questionId === 1 
            ? <button className="empty"></button>
            : <button
                className="back"
                id="back"
                onClick={props.onBackClick}
              >back</button>}
          

          {props.questionId < props.maxQuestion &&
          <button
            className="next"
            id="next"
            onClick={props.onNextClick}
          >next</button>}

          {props.answers.length === props.questionTotal &&
                <button
                  className="submit hidden"
                  id="submit"
                  onClick={props.onSubmitClick}
                >Terminer</button>}

        </div>
      </div>
    </Fragment>
  )
}

Quiz.propTypes = {
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};
export default Quiz;