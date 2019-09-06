import React, {Component} from 'react';
import Question from './question';
import AnswerContainer from './answercontainer';
import {connect} from 'react-redux';


class Container extends Component {
    render() {
        return (<div className="container">
            <img src={require(`../images/millionaire.png`)} className="App-logo" alt="its very bjutifull"/>
            <Question question={this.props.question}/>
            <AnswerContainer/>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        question: state.question,
        answers: state.answers,
    }
}


export default connect(mapStateToProps, null)(Container);