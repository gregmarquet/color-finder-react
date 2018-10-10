import React from 'react';
import PropTypes from 'prop-types';

import './Result.css';
import Chart from '../Chart/Chart';

function Result(props) {
  return (
    <div className="result">
      <h1 className='result__color-title'>Your colors:</h1>
      <div>
        <div className='result__color-legend--container'>
          <p className='result__color-legend'>
            <span className='result__color-legend--color r'>R</span> : {`${Math.round(props.r / 0.13)}%`}</p>
          <p className='result__color-legend'>
            <span className='result__color-legend--color j'>Y</span> : {`${Math.round(props.j / 0.13)}%`}</p>
          <p className='result__color-legend'>
            <span className='result__color-legend--color v'>G</span> : {`${Math.round(props.v / 0.13)}%`}</p>
          <p className='result__color-legend'>
            <span className='result__color-legend--color b'>B</span> : {`${Math.round(props.b / 0.13)}%`}</p>
        </div>
      </div>
      <Chart
        r={props.r}
        j={props.j}
        v={props.v}
        b={props.b} />
      <h2>Understand the results</h2>
      <div className="result__understand container">
        <p className='essential'>Essential point : All the colors are in you. </p>
        <p>The higher the result for a color, the easier it is for you to access it, you can implement all its features : it's your comfort zone.</p>
        <p>The lower the result, the more difficult the color is for you to access, you must make an effort to implement its features : it is your zone of discomfort.</p>
        <p>To get to know yourself better and highlight your talents, refer to the color characteristics.</p>
        <p>This test is only meant to give you a rough idea of ​​your comfort zones and your zone of discomfort</p>
      </div>
      <h2>Characteristic of each color</h2>
      <div className="result__characteristic container">
        <div className="result__characteristic-color bleu b">
          <h3>Talents to analyze problems</h3>
          <ul>
            <li>Think before acting</li>
            <li>Like structured organizations</li>
            <li>Interested in details</li>
            <li>Work alone with precision</li>
            <li>Objective et just</li>
            <li>Do not like being put forward</li>
            <li>Often strict and cold</li>
            <li>Ability to step back</li>
          </ul>
        </div>
        <div className="result__characteristic-color rouge r">
          <h3>Talents to decide</h3>
          <ul>
            <li>Love competition</li>
            <li>fast actions et decisions</li>
            <li>Little tolerance for the feelings of others</li>
            <li>Do not like advice</li>
            <li>Like confrontation</li>
            <li>Work quickly and alone</li>
            <li>Shows little listening</li>
            <li>Is energetic and hardworking</li>
          </ul>
        </div>
        <div className="result__characteristic-color vert v">
          <h3>Talents to advise</h3>
          <ul>
            <li>Prudential decision making</li>
            <li>Listens actively</li>
            <li>Supports others</li>
            <li>Strengthens cohesion</li>
            <li>Gets support from others</li>
            <li>Methodical</li>
            <li>Consensual</li>
            <li>Do not like conflict</li>
          </ul>
        </div>
        <div className="result__characteristic-color jaune j">
          <h3>Talents to persuade</h3>
          <ul>
            <li>Spontaneous</li>
            <li>Do not like loneliness</li>
            <li>Needs variety in his work</li>
            <li>Do not like to follow the rules</li>
            <li>Search recognition</li>
            <li>Like to be put forward</li>
            <li>Comfortable in society</li>
            <li>Fast and lively</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Result.propTypes = {
  r: PropTypes.number.isRequired,
  j: PropTypes.number.isRequired,
  v: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
}

export default Result;