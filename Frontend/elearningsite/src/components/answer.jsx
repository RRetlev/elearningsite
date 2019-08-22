import React, { Component } from 'react';
class Answer extends Component {
    state = {
        localClassname: ['btn', 'btn-primary', 'col', 'buttonmargin']
    }

    handleClick = () => {
        console.log("click")

        if (this.props.answer.right) {
            this.setState(state => {
                const localClassname = [...state.localClassname, "green"];

                return {
                    localClassname
                };
            });
        }
        else{
            this.setState(state => {
                const localClassname = [...state.localClassname, "red"];

                return {
                    localClassname
                };
            });

        }
    }
    render() {
        return (<div >
            <button type="button" className={this.state.localClassname.join(' ')} onClick={this.handleClick}>
                {this.props.answer.text}
            </button>
        </div>);
    }
}

export default Answer;