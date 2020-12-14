//import logo from './logo.svg';
import React from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from "./containers/App";
// from "react-router-dom"; import App from "./containers/App";

console.log('test')
const NextApp = () =>
    <Switch>
        <Route path="/" component={App}/>
    </Switch>;


export default NextApp;
