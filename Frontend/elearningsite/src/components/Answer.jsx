import React, {Component} from 'react';
import {connect} from 'react-redux';


class Answer extends Component {

    handleClick = () => {
        if (this.props.answer.rightAnswer) {
            this.props.onGoodAnswer();
            this.props.setLocalClassname([...this.props.localClassname, "green"]);
        } else {
            this.props.onBadAnswer();
            this.props.setLocalClassname([...this.props.localClassname, "red"]);
        }
    };

    render() {
        return (<div>
            <button type="button" className={this.props.localClassname.join(' ')} onClick={this.handleClick}>
                {this.props.answer.text}
            </button>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        localClassname: state.localClassname,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLocalClassname: function (cssData) {
            const action = {type: "SETCSS", cssData};
            dispatch(action);
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Answer);