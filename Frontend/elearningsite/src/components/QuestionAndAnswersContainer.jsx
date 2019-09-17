import React, {Component} from 'react';
import Question from './Question';
import AnswersContainer from './AnswersContainer';
import {connect} from 'react-redux';


class QuestionAndAnswersContainer extends Component {
    render() {
        return (<div className="container">
            <img src={require(`../images/millionaire.png`)} className="App-logo" alt="its very bjutifull"/>
            <Question question={this.props.question}/>
            <AnswersContainer/>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        question: state.question,
        answers: state.answers,
    }
}

export default connect(mapStateToProps, null)(QuestionAndAnswersContainer);