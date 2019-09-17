import React, {Component} from 'react';
import Answer from './Answer'
import {connect} from 'react-redux';
import {fetchQuestion} from "../services/ApiCallService";


class AnswersContainer extends Component {
    state = {
        isAnswerGiven: false,
        isAnswerRight: false,
        setRestartOnTimer: false,
        localClassname: ['btn', 'btn-primary', 'col', 'buttonmargin']
    };
    intervalId = null;


    handleGoodAnswer = () => {
        console.log("good answer");
        this.setState({isAnswerGiven: true, isAnswerRight: true})
    };

    handleBadAnswer = () => {
        console.log("bad answer");
        this.setState({isAnswerGiven: true})
    };

    setTimer = (seconds, callback) => {
        if (this.intervalId == null) {
            this.intervalId = setInterval(() => {
                seconds--;
                this.props.setSeconds(seconds);
                if (this.state.setRestartOnTimer) {
                    console.log("doneeeee");
                    clearInterval(this.intervalId);
                    this.intervalId = null;
                    this.setState({setRestartOnTimer: false}, () => {
                        this.setTimer(seconds, callback);
                    });
                    return;
                }
                if (seconds === 0) {
                    clearInterval(this.intervalId);
                    this.intervalId = null;
                    callback(seconds);
                }
            }, 1000);
        }
    };

    makeAQuestionFetch = () => {
        fetchQuestion().then((data) => {
            this.props.setQuestion(data);
        })
    };

    onClickHandler = () => {
        this.makeAQuestionFetch();
        this.setState({
            setRestartOnTimer: true,
            isAnswerGiven: false,
        });
        this.props.setLocalClassname(['btn', 'btn-primary', 'col', 'buttonmargin']);
    };

    render() {
        this.setTimer(60, () => {
            this.makeAQuestionFetch();
        });
        return (<div className="conatiner-fluid">
            {
                this.props.answers.map((answer, index) =>
                    <Answer
                        answer={answer}
                        onGoodAnswer={this.handleGoodAnswer}
                        onBadAnswer={this.handleBadAnswer}
                        localClassname={this.state.localClassname}
                        key={index}
                    />)}
            {this.props.seconds}

            {this.state.isAnswerGiven &&
            <div>
                {this.state.isAnswerRight ?
                    <div><h1>Congrats your answer is correct</h1>
                        <button onClick={this.onClickHandler} className="btn btn-info">NEXT</button>
                    </div> : <div><h1>You stupid</h1>
                        <button onClick={this.onClickHandler} className="btn btn-info">NEXT</button>
                    </div>
                }
            </div>
            }
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        question: state.question,
        answers: state.answers,
        seconds: state.seconds,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setQuestion: function (questionData) {
            const action = {type: "FETCHQ", questionData};
            dispatch(action);
        },
        setSeconds: function (seconds) {
            const action = {type: "SETSEC", seconds};
            dispatch(action);
        },
        setRestartOnTimer: function (booleanValue) {
            const action = {type: "RESTARTTIMER", booleanValue};
            dispatch(action);
        },
        setLocalClassname: function (cssData) {
            const action = {type: "SETCSS", cssData};
            dispatch(action);
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswersContainer);