import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Card/card.css';
import './Like/Home.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import App from './App';

ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}><App /></BrowserRouter>, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();