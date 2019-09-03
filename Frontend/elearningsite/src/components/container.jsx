import React, {Component} from 'react';
import Question from './question';
import Answer from './answer';
import AnswerContainer from './answercontainer'

class Container extends Component {
    render() {
        return (<div className="container">
            <img src={require(`../images/millionaire.png`)} className="App-logo" alt="its very bjutifull"/>
            <Question question={this.props.question}/>
            <AnswerContainer
                answers={this.props.answers}
            />
        </div>);
    }
}

export default Container;