import React,{Component} from 'react';
class Answer extends Component {
    state = {  }

    handleClick = () =>{
        console.log("click")
    }
    render() { 
        return (<div >
            <button type="button" className='btn btn-primary col buttonmargin' onClick={this.handleClick}>
            {this.props.answer.text}
            </button>
        </div>);
    }
}
 
export default Answer;