import React from 'react';
import ReactDOM from 'react-dom';
import App from './LandingPage/App';
import {BrowserRouter} from 'react-router-dom';
import './index.css'

console.log(process.env)
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);

