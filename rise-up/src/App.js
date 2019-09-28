import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dashboard from './components/Dashboard';
import Homepage from './components/Homepage';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      
      <div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
          <Route path="/directory">
            <Directory />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
