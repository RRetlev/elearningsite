import React, {Component} from 'react';


class Question extends Component {

    render() {
        return (<div className="Question">
            <p>{this.props.question}</p></div>);
    }
}

export default Question;