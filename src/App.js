import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Instruction from './Instruction';
import QuizSingle from './QuizSingle';
import QuizMultiple from './QuizMultiple';
import ErrorAlert from './ErrorAlert';
import SubmitSingle from './SubmitSingle';
import SubmitMultiple from './SubmitMultiple';
import quizQuestion from './quizQuestions';
import CompletePage from './CompletePage';

import logo from './logo.svg';
import './App.css';
import quizQuestions from './quizQuestions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questionId: 0,
      vignette: "",
      answer: "",
      reply: "",
      options: [],
      isSingle: false,
      // Only used to decide whether display "wrong"
      isCorrect: true,
      // Judge whether the sibmit button is disabled
      buttonDisabled: true,
      totalNums: 0,
      willFinish: false,
      isFinished: false,
    };

    this.renderSingleQuiz = this.renderSingleQuiz.bind(this);
    this.renderMultipleQuiz = this.renderMultipleQuiz.bind(this);
    this.renderCompletePage = this.renderCompletePage.bind(this);
    this.handleSingleOnChange = this.handleSingleOnChange.bind(this);
    this.handleMultipleOnChange = this.handleMultipleOnChange.bind(this);
    this.handleSingleSubmit = this.handleSingleOnSubmit.bind(this);
    this.handleMultipleSubmit = this.handleMultipleSubmit.bind(this);
    this.handleSingleDisable = this.handleSingleDisable.bind(this);
    this.handleMultipleDisable = this.handleMultipleDisable.bind(this);
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.arraysEqual = this.arraysEqual.bind(this);
  };

  componentWillMount() {
    let allInfo = quizQuestion;
    // To test, change the index here
    let firstQuestion = allInfo[0];
    let willFinish = (1 === quizQuestion.length);
    this.setState({
      answer: firstQuestion.answer,
      options: firstQuestion.options,
      vignette: firstQuestion.question,
      isSingle: firstQuestion.single,
      totalNums: quizQuestion.length,
      willFinish: willFinish,
    });
  }

  renderSingleQuiz() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}
        >
          <div key = {this.state.questionId} className="quiz">
            <QuizSingle
              questionId = {this.state.questionId}
              vignette = {this.state.vignette}
              answer = {this.state.answer}
              reply = {this.state.reply}
              options = {this.state.options}
              handleOnChange = {this.handleSingleOnChange}
              handleDisable = {this.handleSingleDisable}
            />
          </div>
        </ReactCSSTransitionGroup>
        <ErrorAlert
          isWrong = {!this.state.isCorrect}
        />
        <SubmitSingle
          handleSubmit = {this.handleSingleSubmit}
          willFinish = {this.state.willFinish}
          disabled = {this.state.buttonDisabled}
        />
      </div>
    )
  }

  renderMultipleQuiz() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}
        >
          <div key = {this.state.questionId} className="quiz">
            <QuizMultiple
              questionId = {this.state.questionId}
              vignette = {this.state.vignette}
              answer = {this.state.answer}
              reply = {this.state.reply}
              options = {this.state.options}
              handleOnChange = {this.handleMultipleOnChange}
              handleDisable = {this.handleMultipleDisable}
            />
          </div>
        </ReactCSSTransitionGroup>
        <ErrorAlert
          isWrong = {!this.state.isCorrect}
        />
        <SubmitMultiple
          handleSubmit = {this.handleMultipleSubmit}
          willFinish = {this.state.willFinish}
          disabled = {this.state.buttonDisabled}
        />
      </div>
    )
  }

  renderCompletePage() {
    return(
      <CompletePage />
    )
  }

  handleSingleOnChange(reply, f) {
    this.setState({
      reply: reply,
      isCorrect: true,
    }, () => {
      f();
    })
  }

  handleMultipleOnChange(name, id, checked, value, f) {
    let currReply = this.state.reply;
    if (this.state.reply.length === 0) {
      currReply = [];
      for (let i = 0; i < this.state.answer.length; i++) {
        currReply.push("");
      }
    }
    if (checked) {
      currReply[id] = value;
    } else {
      currReply[id] = "";
    }
    console.log("handle")
    this.setState({
      reply: currReply,
      isCorrect: true,
    }, () => {
      f();
    })    
  }

  handleSingleDisable() {
    if (!(this.state.reply == "")) {
      this.setState({
        buttonDisabled: false,
      })
    }
  }

  handleMultipleDisable() {
    console.log("disable")
    if (!(this.state.reply == "")) {
      let cnt = 0;
      for (let i = 0; i < this.state.reply.length; i++) {
        if (!(this.state.reply[i] == "")) {
          cnt++;
        }
      }
      if (cnt > 1){
        this.setState({
          buttonDisabled: false,
        })
      }
    }
  }

  handleSingleOnSubmit() {
    if (this.state.answer === this.state.reply) {
      if (this.state.willFinish) {
        this.setState({
          isFinished: true,
        })
      } else {
        this.setNextQuestion();
      } 
    } else {
      this.setState({
        isCorrect: false,
      })
    }
  }

  handleMultipleSubmit() {
    if (this.arraysEqual(this.state.reply, this.state.answer)) {
      if (this.state.willFinish) {
        this.setState({
          isFinished: true,
        })
      } else this.setNextQuestion();
    } else {
      this.setState({
        isCorrect: false,
      })
    }
  }

  arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  setNextQuestion() {
    let currIndex = this.state.questionId + 1;
    let currQuestion = quizQuestions[currIndex];
    let willFinish = (this.state.totalNums === currIndex + 1);
    this.setState({
      questionId: currIndex,
      vignette: currQuestion.question,
      answer: currQuestion.answer,
      options: currQuestion.options,
      reply: "",
      isSingle: currQuestion.single,
      buttonDisabled: true,
      isCorrect: true,
      willFinish: willFinish,
    })
  }

  render() {
    let quiz;
    if (this.state.isSingle) quiz = this.renderSingleQuiz();
    else quiz = this.renderMultipleQuiz();
    let completePage = this.renderCompletePage();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">## QUIZ ##</h1>
        </header>
        <div className="quiz-wrapper">
          <Instruction num = {this.state.totalNums}/>
          {this.state.isFinished ? completePage : quiz}
        </div>
      </div>
    );
  }
}

export default App;
