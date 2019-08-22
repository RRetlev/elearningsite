import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/container';
import { BrowserRouter as Router, Route } from 'react-router-dom'






class App extends Component {
  state = {
    question: null,
    answers: [],
    isAnswerGiven: false,
    isAnswerRight: false
  }

  handlegoodAnswer = () => {
    console.log("good answer")
    this.setState({ isAnswerGiven: true, isAnswerRight: true })
  }

  handleBadAnswer = () => {
    console.log("bad answer")
    this.setState({ isAnswerGiven: true })
  }

  refreshPage = () => {
    window.location.reload();
  }

  componentDidMount() {
    console.log("DiD Mount")
    fetch('http://localhost:8080/question')
      .then(response => response.json())
      .then(data =>
        this.setState({
          answers: data.answers,
          question: data.question
        })
      )
  }



  render() {
    return (
      <Router>

        <div className="App">
          <Route exact path="/" render={props => (
            <Container question={this.state.question} answers={this.state.answers} ongoodAnswer={this.handlegoodAnswer} onbadAnswer={this.handleBadAnswer} />
          )}
          />
          <div>
            {this.state.isAnswerGiven && this.state.isAnswerRight ? <div><h1>Congrats your answer is correct</h1>
              <button onClick={this.refreshPage} className="btn btn-info">
                NEXT
          </button>
            </div> : null}
          </div>
          <div>
            {this.state.isAnswerGiven && !this.state.isAnswerRight ? <div><h1>You are dumb as fuck</h1>
              <button onClick={this.refreshPage} className="btn btn-info">
                NEXT
          </button>
            </div> : null}
          </div>
        </div>

      </Router>
    );
  }
}

export default App;
