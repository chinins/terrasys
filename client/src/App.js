import React, { Component } from 'react';
import './App.css';
import AppHeader from './containers/AppHeader';
import Dashboard from './containers/Dashboard';
import noticeArray from './mock-data/mock';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      notices: noticeArray
    }
  }

  createNotice = (notice) => {
    console.log(notice);
    this.setState({
      notices: this.state.notices.concat(notice)
    })

  }

  render() {
    return (
      <div className="App">
        <AppHeader/>
        <Dashboard onNoticeCreate={this.createNotice}></Dashboard>
      </div>
    );
  }
}

export default App;
