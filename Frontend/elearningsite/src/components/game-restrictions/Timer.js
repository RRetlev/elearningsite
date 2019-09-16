import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchQuestion} from "../../services/ApiCallService";



class Timer extends Component {
    state = {
        seconds: '',
    };

    componentDidMount() {
        let counter = this.props.seconds;
        let intId = setInterval(() => {
            this.setState({
                seconds: counter,
            });
            counter--;
            if (counter === 0) {
                clearInterval(intId);
                fetchQuestion().then(data => this.props.setQuestion(data))
            }
        }, 1000);
    };


    render() {
        return (
            <div>
                {this.props.displayCounter ? this.state.seconds : ''}
            </div>
        );
    }


}


const mapDispatchToProps = (dispatch) => {
    return {
        setQuestion: function (questionData) {
            const action = {type: "FETCHQ", questionData};
            dispatch(action);
        }

    }
};


export default connect(null, mapDispatchToProps)(Timer);