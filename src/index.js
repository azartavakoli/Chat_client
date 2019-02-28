
//vendor
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import  'font-awesome/css/font-awesome.min.css';

//Pages
import App from './App';


ReactDOM.render(<Router>
    <App/>
</Router>, document.getElementById('root'));


