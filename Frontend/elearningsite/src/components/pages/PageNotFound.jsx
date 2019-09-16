import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PageNotFound extends Component {
    render() {
        return (
            <div style={pageNotFoundStyle}>
                <h1>Sorry, but this URL does not exist!</h1>
                <img src={window.location.origin + '/PageNotFound.png'} alt=""/><br/>
                <Link style={linkStyle} to={"/"}>GO HOME</Link>
            </div>
        );
    }

}

const pageNotFoundStyle = {
    color: 'red',
    fontFamily: 'Luckiest Guy',
    fontSize: '35px',
    cssFloat: 'center',
};

const linkStyle = {
    color: 'red',
    fontsize: '34',
    fontWeight: 'bold',
};


export default PageNotFound;