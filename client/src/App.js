import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Dashboard from './containers/Dashboard';
import BlockchainLog from './containers/BlockchainLog';

const baseUrl = 'http://localhost:3003/';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      notices: [],
      messages: [],
      searchedNotices: []
    }
    this.fetchNotices();
    this.fetchMessages();
  }

  fetchNotices () {
    fetch(baseUrl)
    .then(res => res.json())
    .then(notices => this.setState({
      notices: notices,
      searchedNotices: notices }));
  }

  searchNotice = (str) => {
    console.log(str);
    this.setState({
      searchedNotices: this.state.notices.filter(el => el.admRefId.includes(str.toUpperCase()) || el.admRefId.includes(str))
    })
  }

  fetchMessages () {
    fetch(`${baseUrl}messages`)
    .then(res => res.json())
    .then(messages => this.setState({ messages }));
  }

  createNotice = (notice) => {
    fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify({
        admRefId: notice.admRefId,
        administration: notice.administration,
        freqAssign: notice.freqAssign
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => this.fetchNotices());
  }

  postMessage = (message) => {

  }

  validateNotice = (notice) => {
    fetch(`${baseUrl}validate/${notice._id}`, {
      method: 'PUT'
    })
    .then(() => this.fetchNotices());
  }

  publishNotice = (notice) => {
    fetch(`${baseUrl}publish/${notice._id}`, {
      method: 'PUT'
    })
    .then(() => this.fetchNotices())
  }


  render() {
    return (
      <div className="App">
        <AppHeader/>
        <Dashboard notices={this.state.searchedNotices} onNoticeCreate={this.createNotice}
          onValidate={this.validateNotice} onPublish={this.publishNotice}
          onSearch={this.searchNotice}/>
        <BlockchainLog messages={this.state.messages}></BlockchainLog>
        <AppFooter></AppFooter>
      </div>
    );
  }
}

export default App;
