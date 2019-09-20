import React, {Component} from 'react';
import Question from './Question';
import AnswersContainer from './AnswersContainer';
import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom'
import {fetchQuestion, fetchRunQuestion} from "../services/ApiCallService";


class QuestionAndAnswersContainer extends Component {

    componentDidMount() {
        console.log("DiD Mount");
        if (this.props.isRun) {
            fetchRunQuestion().then(data => this.props.setQuestion(data))
        } else {
            fetchQuestion()
                .then(data => this.props.setQuestion(data))
        }
    };


    render() {
        return (<div className="container padding">
            <div>
                <Question className="Question" question={this.props.question}/>
                <AnswersContainer/>
            </div>

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
        },

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAndAnswersContainer);