import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import QuestionAndAnswersContainer from './components/QuestionAndAnswersContainer';
import AddQuestion from './components/pages/AskNewQuestion';
import Header from "./components/layout/Header.jsx";
import PageNotFound from "./components/pages/PageNotFound.jsx";
import {connect} from 'react-redux';
import {fetchQuestion} from "./services/ApiCallService";


class App extends Component {

    componentDidMount() {
        console.log("DiD Mount");
        fetchQuestion()
            .then(data => this.props.setQuestion(data))
    };


    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route path="/new-question" component={() => <AddQuestion/>}/>
                        <Route exact path="/" component={QuestionAndAnswersContainer}/>
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
