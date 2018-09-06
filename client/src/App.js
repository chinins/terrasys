import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <h1 className="app-title">ITU Terrasys</h1>
          <div className="search">
            <input type="text" placeholder="Search"></input>
          </div>
        </header>
        <div className="Dashboard">
          <div className="NoticeList">
            <div className="Notice">
              <p>id</p>
              <p>Created on Sept 21</p>
              <p>Administration</p>
              <p>Assigned frequency - 987</p>
              <p>Stage - Part 1</p>
              <p>Plan / MIFR</p>

            </div>

            <div className="Notice">
              <p>id</p>
              <p>Created on Sept 21</p>
              <p>Country</p>
              <p>Assigned frequency - 987</p>
            </div>
            <div className="Notice">
              <p>id</p>
              <p>Created on Sept 21</p>
              <p>Country</p>
              <p>Assigned frequency - 987</p>
            </div>

          </div>
          <div className="NewNotice">New Notice
            <form className="new-notice-form">
              <input type="text" placeholder="id"></input>
              <input type="text" placeholder="Country"></input>
              <input type="text" placeholder="Assigned Frequency"></input>
              <input type="submit" value="Add Notice"></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
