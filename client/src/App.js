import React, { Component } from 'react';
import './App.css';
import AppHeader from './containers/AppHeader';
import Dashboard from './containers/Dashboard';
import BlockchainLog from './containers/BlockchainLog';

const baseUrl = 'http://localhost:3003/';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      notices: [],
      messages: []
    }
    this.fetchNotices();
    this.fetchMessages();
  }

  fetchNotices () {
    fetch(baseUrl)
    .then(res => res.json())
    .then(notices => this.setState({ notices }));
  }

  fetchMessages () {
    fetch(`${baseUrl}messages`)
    .then(res => res.json())
    .then(messages => this.setState({ messages }));
  }

  createNotice = (notice) => {
    console.log(notice);
    this.setState({
      notices: this.state.notices.concat(notice)
    })
  }

  validateNotice = (notice) => {
    console.log('validated', notice)
  }

  publishNotice = (notice) => {
    console.log('published', notice);
  }


  render() {
    return (
      <div className="App">
        <AppHeader/>
        <Dashboard notices={this.state.notices} onNoticeCreate={this.createNotice}
        onValidate={this.validateNotice} onPublish={this.publishNotice}/>
        <BlockchainLog messages={this.state.messages}></BlockchainLog>
      </div>
    );
  }
}

export default App;
