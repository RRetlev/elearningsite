import React, {Component} from 'react';
import Question from './Question';
import AnswersContainer from './AnswersContainer';
import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom'
import {fetchQuestion} from "../services/ApiCallService";


class QuestionAndAnswersContainer extends Component {

    componentDidMount() {
        console.log("DiD Mount");
        fetchQuestion()
            .then(data => this.props.setQuestion(data))

    };

    // wait = (ms) => {
    //     let start = Date.now(),
    //         now = start;
    //     while (now - start < ms) {
    //         now = Date.now();
    //     }
    // };

    render() {
        return (<div className="container">
            <img src={require(`../images/millionaire.png`)} className="App-logo" alt="its very bjutifull"/>
            <div><Question question={this.props.question}/> <AnswersContainer/></div>
            {/*{this.wait(3214)}*/}
            {/*{*/}
            {/*    this.props.question ?*/}
            {/*        (<div><Question question={this.props.question}/> <AnswersContainer/></div>)*/}
            {/*        :*/}

            {/*        <Redirect to='/error/500'/>*/}
            {/*}*/}
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        question: state.question,
        answers: state.answers,
        isRun: state.isRun,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setQuestion: function (questionData) {
            const action = {type: "FETCHQ", questionData};
            dispatch(action);
        },
        setIsRun: function (isRunBoolean) {
            const action = {type: "SETISRUN", isRunBoolean};
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAndAnswersContainer);