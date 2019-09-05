import React, {Component} from 'react';
import Answer from './answer'
import Timer from "./game-restrictions/Timer";
import {connect} from 'react-redux';


class AnswerContainer extends Component {
    state = {
        isAnswerGiven: false,
        isAnswerRight: false,
    };


    handleGoodAnswer = () => {
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
                        onGoodAnswer={this.handleGoodAnswer}
                        onBadAnswer={this.handleBadAnswer}
                    />)}
            <Timer seconds={60}
                   displayCounter={true}
            />

            <div>
                {this.state.isAnswerGiven && this.state.isAnswerRight ?
                    <div><h1>Congrats your answer is correct</h1>
                        {/*<button onClick={this.refreshPage} className="btn btn-info">NEXT</button>*/}
                        <Timer seconds={5}
                               displayCounter={true}
                        />
                    </div> : null}
            </div>
            <div>
                {this.state.isAnswerGiven && !this.state.isAnswerRight ? <div><h1>You stupid</h1>
                    {/*<button onClick={this.refreshPage} className="btn btn-info">NEXT</button>*/}
                    <Timer seconds={5}
                           displayCounter={true}
                    />
                </div> : null}
            </div>
        </div>);

    }
}
function mapStateToProps(state) {
    return {
        question: state.question,
        answers: state.answers,
    }
}

export default connect (mapStateToProps)(AnswerContainer);