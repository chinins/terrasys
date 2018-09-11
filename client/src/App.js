import React, { Component } from 'react';
import './App.css';
import AppHeader from './containers/AppHeader';
import Dashboard from './containers/Dashboard';
import { noticeArray, messageArray } from './mock-data/mock';
import BlockchainLog from './containers/BlockchainLog';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      notices: noticeArray,
      messages: messageArray
    }
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
