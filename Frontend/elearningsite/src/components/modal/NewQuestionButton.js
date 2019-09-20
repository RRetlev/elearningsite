import React, {Component} from "react";
import { withRouter} from 'react-router-dom'

class NewQuestionButton extends Component {

    toNewQuestion = () =>{
        this.props.history.push("/new-question")
    }

    state = {  }
    render() { 
        return ( 
            <div >
                <button className="NewQuestionButton" onClick={this.toNewQuestion}>
                Add New Question
                </button>
            </div>
         );
    }
}
 
export default withRouter(NewQuestionButton);