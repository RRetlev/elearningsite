import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Container from './components/container';
import AddQuestion from './components/pages/newquestion';
import Header from "./components/layout/Header";
import PageNotFound from "./components/pages/PageNotFound";


class App extends Component {
    state = {
        question: null,
        answers: [],
    };


    componentDidMount() {
        console.log("DiD Mount");
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
                    <Header/>
                    <Switch>

                        <Route path="/new-question" component={() => <AddQuestion/>}/>
                        <Route exact path="/" render={props => (
                            <Container question={this.state.question}
                                       answers={this.state.answers}
                            />)}
                        />
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>

            </Router>
        );
    }


}

export default App;
