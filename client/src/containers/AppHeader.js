import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class AppHeader extends Component {
  render () {
    return (
      <header className="app-header">
        <h1 className="app-title">ITU Terrasys</h1>
        <nav>
          <Link to='/'>All notices</Link>
          <Link to='/new-notice'>Add Notice</Link>
          <Link to='/details'>Notice Details</Link>
        </nav>
        <div className="search">
          <input type="text" placeholder="Search"></input>
        </div>
      </header>
    )
  }
}