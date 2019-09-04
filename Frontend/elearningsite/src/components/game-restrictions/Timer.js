import React, {Component} from 'react';

class Timer extends Component {
    state = {
        seconds: '',
    };

    componentDidMount() {
        let counter = this.props.seconds;
        setInterval(() => {
            this.setState({
                seconds: counter,
            });
            counter--;
            if (counter === 0) {
                this.props.refreshPage();
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

export default Timer;