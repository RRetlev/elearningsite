import React,{Component} from 'react';
import Question from './question';
import Answer from './answer';




class Container extends Component {
    state = {  }
    render() { 
        return (<div>
            <h1>
                Temp E-Learning Site
            </h1>
            <Question question={this.props.question}/>
            <Answer id="id" answers={this.props.answers}/>
            <Answer id="id" answers={this.props.answers}/>
            <Answer id="id" answers={this.props.answers}/>
            <Answer id="id" answers={this.props.answers}/>            
        </div>);
    }
}
 
export default Container;