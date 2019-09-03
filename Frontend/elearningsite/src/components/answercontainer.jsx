import React, {Component} from 'react';
import Answer from './answer'

class AnswerContainer extends Component {
    state = {}

    render() {
        return (<div className="conatiner-fluid">
            {this.props.answers.map(answer =>
                <Answer
                    answer={answer}
                    ongoodAnswer={this.props.ongoodAnswer}
                    onbadAnswer={this.props.onbadAnswer}
                />)}

        </div>);
    }
}

export default AnswerContainer;