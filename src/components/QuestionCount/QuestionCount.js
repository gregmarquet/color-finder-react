import React from 'react';
import PropTypes from 'prop-types';

import './QuestionCount.css';

function QuestionCount(props) {
  return (
    <div className="questionCount">
      Question <span>{props.counter}</span> sur <span>{props.total}</span>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired
}

export default QuestionCount;