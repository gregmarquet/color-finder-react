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
      answersCount: {
        r: 0,
        j: 0,
        v: 0,
        b: 0

      },
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
    console.log(answer)
    let answers = this.state.answers.slice()
    const questionId = this.state.questionId
    if(answers[questionId - 1]) {
      answers[questionId - 1] = answer
    } else {
      answers.push(answer)
    }

    console.log(answers)

    this.setState({
      // answersCount: updatedAnswersCount,
      // answer:answer,
      answers: answers
    });
  }

  // setUserAnswer(answer) {
  //   console.log(answer)
  //   const updatedAnswersCount = update(this.state.answersCount, {
  //     [answer]: { $apply: (currentValue) => currentValue + 1 }
  //   });
  //   this.setState({
  //     answersCount: updatedAnswersCount,
  //     answer: answer
  //   });
  // }

  setLastQuestion() {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      // answer: ''
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
      // answer: '',
      maxQuestion: maxQuestion
    })
  }
    
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      // setTimeout(() => this.setNextQuestion(), 300);
      this.setNextQuestion()
    } else {
      const quizDone = true
      this.setState({
        quizDone: quizDone
      })
    }
  }

  handleBackClick = () => {
    // setTimeout(() => this.setLastQuestion(), 300)
    this.setLastQuestion()
  }

  handleNextClick = () => {
    // setTimeout(() => this.setNextQuestion(), 300)
    this.setNextQuestion()
  }

  handleSubmitClick = () => {
    // setTimeout(() => this.setResults(this.getResults()), 300);
    this.setResults(this.getResults())
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        // answer={this.state.answer}
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
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
