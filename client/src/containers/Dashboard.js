import React, { Component } from 'react';
import NoticeTable from './NoticeTable';
import NewNotice from './NewNotice';

export default class Dashboard extends Component {
  render () {
    return (
      <div className="Dashboard">
        <div className="NoticeList">
          <h2>
            Notice List
          </h2>
          <NoticeTable notices={this.props.notices}></NoticeTable>
        </div>
        <NewNotice onNoticeCreate={this.props.createNotice}/>
      </div>
    )
  }
}
