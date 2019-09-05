import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Container from './components/container';
import AddQuestion from './components/pages/newquestion';
import Header from "./components/layout/Header";
import PageNotFound from "./components/pages/PageNotFound";
import {connect} from 'react-redux';
import {fetchQuestion} from "./services/ApiCallService";


class App extends Component {

    // state = {
    //     question: null,
    //     answers: [],
    // };


    componentDidMount() {
        console.log("DiD Mount");
        fetchQuestion()
            .then(data => this.props.setQuestion(data))

        // fetch('http://localhost:8080/question')
        //     .then(response => response.json())
        //     .then(data =>
        //         this.setState({
        //             answers: data.answers,
        //             question: data.question
        //         })
        //     )
    };


    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route path="/new-question" component={() => <AddQuestion/>}/>
                        <Route exact path="/" component={() => <Container/>}/>
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
