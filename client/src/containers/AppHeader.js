import React, { Component } from 'react';

export default class AppHeader extends Component {
  render () {
    return (
      <header className="app-header">
        <h1 className="app-title">ITU Terrasys - Blockchain Prototype</h1>
        <div className="search">
          <input type="text" placeholder="Search"></input>
        </div>
      </header>
    )
  }
}