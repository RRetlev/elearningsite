import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Container from './components/container';
import AddQuestion from './components/pages/newquestion';

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
    return(
        <Router>
            <div className="App">
                <div className="container">
                    <Route exact path="/" render={props =>(<Container question={this.state.question} answers={this.state.answers}/>)} />
                    <Route path="/new-question" component={()=> <AddQuestion/>}/>
                </div>
            </div>
        </Router>
    )
}
}


export default App;
