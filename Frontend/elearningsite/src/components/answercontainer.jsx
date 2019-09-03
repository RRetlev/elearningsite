import React, {Component} from 'react';
import Answer from './answer'

class AnswerContainer extends Component {
    state = {
        isAnswerGiven: false,
        isAnswerRight: false,
    };

    handlegoodAnswer = () => {
        console.log("good answer");
        this.setState({isAnswerGiven: true, isAnswerRight: true})
    };

    handleBadAnswer = () => {
        console.log("bad answer");
        this.setState({isAnswerGiven: true})
    };

    refreshPage = () => {
        window.location.reload();
    };

    render() {
        return (<div className="conatiner-fluid">
            {
                this.props.answers.map(answer =>
                    <Answer
                        answer={answer}
                        ongoodAnswer={this.handlegoodAnswer}
                        onbadAnswer={this.handleBadAnswer}
                    />)}
            <div>
                {this.state.isAnswerGiven && this.state.isAnswerRight ?
                    <div><h1>Congrats your answer is correct</h1>
                        <button onClick={this.refreshPage} className="btn btn-info">
                            NEXT
                        </button>
                    </div> : null}
            </div>
            <div>
                {this.state.isAnswerGiven && !this.state.isAnswerRight ? <div><h1>You stupid</h1>
                    <button onClick={this.refreshPage} className="btn btn-info">
                        NEXT
                    </button>
                </div> : null}
            </div>
        </div>);

    }
}

export default AnswerContainer;