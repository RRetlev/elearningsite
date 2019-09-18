import React, {Component} from 'react';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1 className="other-text-color">Welcome on the site!</h1>
                <a href="/learn">Learn</a>
                <br/>
                <a href="/run">Test your knowledge</a> 
            </div>
        );
    }
}

export default HomePage;