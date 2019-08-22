import React,{Component} from 'react';




class Question extends Component {
    state = {  }
    render() { 
        return ( <div className="col">
            <h1>{this.props.question}</h1>
        </div> );
    }
}
 
export default Question;