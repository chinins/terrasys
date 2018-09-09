import React, { Component } from 'react';
import './App.css';
import AppHeader from './containers/AppHeader';
import Dashboard from './containers/Dashboard';
import noticeArray from './mock-data/mock';
import NoticeDetails from './components/NoticeDetails';


import { Route, Link } from 'react-router-dom';
import NewNotice from './containers/NewNotice';


class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      notices: noticeArray,
      selectedNotice: {}
    }
  }

  createNotice = (notice) => {
    console.log(notice);
    this.setState({
      notices: this.state.notices.concat(notice)
    })
  }

  displayDetails = (notice) => {
    this.setState({
      selectedNotice: notice
    })
    console.log(this.state.selectedNotice)
  }

  render() {
    return (
      <div className="App">
        <AppHeader/>
        <Route exact={true} path="/" render={() => <Dashboard notices={this.state.notices} onRowClick={this.displayDetails}/>}/>
        <Route path={`/details/:${this.state.selectedNotice.admRefId}`} render={() => <NoticeDetails notice={this.state.selectedNotice}/>}/>
        <Route path="/new-notice" render={() => <NewNotice onNoticeCreate={this.createNotice}/>} />
      </div>
    );
  }
}

export default App;
