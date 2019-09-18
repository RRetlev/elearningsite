import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import QuestionAndAnswersContainer from './components/QuestionAndAnswersContainer';
import AddQuestion from './components/pages/AskNewQuestion';
import Header from "./components/layout/HeaderTest.js";
import PageNotFound from "./components/pages/PageNotFound.jsx";
import {connect} from 'react-redux';
import ServerNotFound from "./components/pages/ServerNotFound.jsx";
import HomePage from "./components/pages/HomePage";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App background-color">
                    <Header/>
                    <Switch>
                        <Route path="/new-question" component={() => <AddQuestion/>}/>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/mode1" component={QuestionAndAnswersContainer}/>
                        <Route path="/error/500" component={ServerNotFound}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }


}




function mapStateToProps(state) {
    return {
        question: state.question,
        answers: state.answers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setQuestion: function (questionData) {
            const action = {type: "FETCHQ", questionData};
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
