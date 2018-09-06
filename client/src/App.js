import React, { Component } from 'react';
import './App.css';
import AppHeader from './containers/AppHeader';
import Dashboard from './containers/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <Dashboard></Dashboard>
      </div>
    );
  }
}

export default App;
