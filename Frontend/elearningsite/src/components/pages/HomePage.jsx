import React, {Component} from 'react';
import { withRouter} from 'react-router-dom'

class HomePage extends Component {

    routeToLearn = () =>{
        this.props.history.push(`/learn`)
    }
    routeToRun = () =>{
        this.props.history.push(`/run`)
    }

    render() {
        return (
            <div className="HomepageContainer container">
                <h1 className="other-text-color">Welcome on our Learning site!</h1>
                <h5 className="other-text-color">This site was made to help learning facts about various topics<br/>The LEARN option will take you to a free Learning enviroment where you will get various question<br/>
                If you click on the TEST option you can choose a topic and an amount of questions. This version of the Game also gives you a score</h5>
            
                <button onClick={this.routeToLearn} className="homepageButtons"  >Learn</button>
                <br/>
                <button onClick={this.routeToRun} className="homepageButtons">Test your knowledge</button> 
            </div>
        );
    }
}

export default withRouter(HomePage);