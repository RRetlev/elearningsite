import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/container';

class App extends Component {
  state = {
    question: null,
    answers: []
  }
  componentDidMount(){
    console.log("DiD Mount")
    fetch('http://localhost:8080/question')
    .then(response => response.json())
    .then(data => 
      this.setState({answers: data.answers,
      question: data.question})
      )
  }



  render() {
    return (
      <div className="App">
        <Container
         question={this.state.question}
         answers={this.state.answers}/>
      </div>
    );
  }
}

export default App;
