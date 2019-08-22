import React, { Component } from 'react';
import Question from './question';
import Answer from './answer';
import AnswerContainer from './answercontainer'




class Container extends Component {
    state = {
        answergiven: false,
    }

    giveAnswer = () =>{
        this.setState({
            answergiven : true
        })
    }


    render() {
        return (<div className="container">
            <img src={require(`../images/milionaire.png`)} className="App-logo" />
            <Question question={this.props.question} />
            <AnswerContainer answers={this.props.answers} />
        </div>);
    }
}

export default Container;