import React, { Component } from 'react';
import NoticeTable from './NoticeTable';
import NewNotice from './NewNotice';

export default class Dashboard extends Component {
  render () {
    const { ...properties } = this.props;
    return (
      <div className="Dashboard">
        <div className="NoticeList">
          <h2>
            Notice List
          </h2>
          <NoticeTable {...properties}></NoticeTable>
        </div>
        <NewNotice onNoticeCreate={this.props.onNoticeCreate}/>
      </div>
    )
  }
}
