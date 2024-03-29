import React from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './components/Dashboard';
import Homepage from './components/Homepage';
//import Directory from './components/Directory';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
