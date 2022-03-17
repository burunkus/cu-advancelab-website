/**
 * @author Ebuka Okpala
 * Date: 06/11/2021
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
/*
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById('root')
);*/

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>, 
    document.getElementById('root')
);