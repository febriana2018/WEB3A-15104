import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import './App.css';
import './Like/Home.css';
import * as serviceWorker from './serviceWorker';
import Home from './Like/Home';

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();