import React, { Component } from 'react';
import NoticeTable from './NoticeTable';

import { Route, Link } from 'react-router-dom';

export default class Dashboard extends Component {
  render () {
    return (
      <div className="Dashboard">
        <div className="NoticeList">
          <h2>
            <Link to="/details">Notice List</Link>
          </h2>
          <NoticeTable notices={this.props.notices} onRowClick={this.props.onRowClick}></NoticeTable>
        </div>
      </div>
    )
  }
}
