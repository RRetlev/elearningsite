import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Let's be a MILLIONAIRE!</h1>
            <Link style={linkStyle} to={"/"}> Home </Link>
            |
            <Link style={linkStyle} to={"/new-question"}> Ask a question! </Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    fontWeight: 'bold',
};

const linkStyle = {
    color: 'white',
    fontsize: '16',
    fontWeight: 'bold',
};
export default Header;