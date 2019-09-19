import React from 'react';
import {Link} from "react-router-dom";
import RegisterModal from "../modal/RegisterModal";

const Header = () => {
    return (
        <header>
            <div style={buttons}>
                <RegisterModal/>
            </div>
            <div style={headerStyle}>
                <h1 style={textStyle}>Let's be a MILLIONAIRE!</h1>
                <Link style={linkStyle} to={"/"}> Home </Link>
                |
                <Link style={linkStyle} to={"/new-question"}> Ask a question! </Link>
            </div>
        </header>

    )
}

const headerStyle = {
    background: 'black',
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

const textStyle = {
    color: 'white',
};

const buttons = {
    alignContent: 'left'
};

export default Header;