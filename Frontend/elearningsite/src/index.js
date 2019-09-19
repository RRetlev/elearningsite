import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {createStore} from "redux";
import Provider from "react-redux/es/components/Provider";
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.less';

const initialState = {
    question: '',
    answers: [],
    second: null,
    localClassname: ['btn', 'btn-primary', 'col', 'buttonmargin'],
    isLoggedIn: false,
    username: '',
    wrongLogInCredentials: false,
    isUserNameAlreadyInUse: false,
    isRegisterSuccessful: false,
    isPasswordSame: true,
    isRun: false,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCHQ':
            return {
                ...state,
                question: action.questionData.question,
                answers: action.questionData.answers,
            };
        case 'SETSEC':
            return {
                ...state,
                seconds: action.seconds,
            };
        case 'SETCSS':
            return {
                ...state,
                localClassname: action.cssData
            };
        case 'CHANGEISLOGGEDIN':
            return {
                ...state,
                isLoggedIn: action.booleanType
            };
        case 'SETUSERNAME':
            return {
                ...state,
                username: action.username
            };
        case 'SETWRONGLOGINCRED':
            return {
                ...state,
                wrongLogInCredentials: action.logInBooleanType
            };
        case 'SETUSERNAMEINUSE':
            return {
                ...state,
                isUserNameAlreadyInUse: action.registerBooleanType
            };
        case 'SETREGISTERSUCCESSFUL':
            return {
                ...state,
                isRegisterSuccessful: action.registerSuccessBoolean
            };
        case 'SETISPASSSAME':
            return {
                ...state,
                isPasswordSame: action.passSameBoolean
            };
        case 'SETISRUN':
            return {
                ...state,
                isRun: action.isRunBoolean
            };
        default:
            return state;

    }
}

export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
