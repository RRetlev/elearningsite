import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {createStore} from "redux";
import Provider from "react-redux/es/components/Provider";


const initialState = {
    question: '',
    answers: [],
    second: null,
    localClassname: ['btn', 'btn-primary', 'col', 'buttonmargin']
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
