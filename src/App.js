import React, { Component } from 'react';
// import update from 'immutability-helper';
import Quiz from './components/Quiz/Quiz';
import quizQuestions from './api/quizQuestions';
import Result from './components/Result/Result';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answers: [],
      answersCount: {},
      result: '',
      maxQuestion: 1,
      quizDone: false
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers
    });
  }

  setUserAnswer(answer) {
    let answers = this.state.answers.slice()
    const questionId = this.state.questionId
    if(answers[questionId - 1]) {
      answers[questionId - 1] = answer
    } else {
      answers.push(answer)
    }

    this.setState({
      answers: answers
    });
  }

  setLastQuestion() {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers
    })
  }

  setNextQuestion() {
    let maxQuestion = this.state.maxQuestion
    if (this.state.maxQuestion === this.state.questionId) {
      maxQuestion += 1;
    }
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    const question = quizQuestions[counter].question;
    
    this.setState({
      counter: counter,
      questionId: questionId,
      question: question,
      answerOptions: quizQuestions[counter].answers,
      maxQuestion: maxQuestion
    })
  }
    
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      this.setNextQuestion()
    }
  }

  handleBackClick = () => {
    this.setLastQuestion()
  }

  handleNextClick = () => {
    this.setNextQuestion()
  }

  handleSubmitClick = () => {
    this.getAnswerCount()
    const quizDone = true
    this.setState({
      quizDone: quizDone
    })
  }

  getAnswerCount = () => {
    let answersCount = this.state.answers.reduce((obj, char) => {
      char in obj ? obj[char]++ : obj[char] = 1;
      return obj
    }, {})
    this.setState({
      answersCount: answersCount
    })
  }

  renderQuiz() {
    return (
      <Quiz
        answers={this.state.answers}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        onBackClick={this.handleBackClick}
        onNextClick={this.handleNextClick}
        onSubmitClick={this.handleSubmitClick}
        maxQuestion={this.state.maxQuestion}
        quizDone={this.state.quizDone}
      />
    );
  }
  renderResult() {
    return (
      <Result
        r={this.state.answersCount.r}
        j={this.state.answersCount.j}
        v={this.state.answersCount.v}
        b={this.state.answersCount.b} />
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        {this.state.quizDone ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
