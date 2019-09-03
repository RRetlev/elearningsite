import React, {Component} from 'react';

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h1>Sorry, but this URL does not exist!</h1>
                <img src={window.location.origin + '/PageNotFound.png'} alt=""/>
            </div>
        );
    }
}

export default PageNotFound;