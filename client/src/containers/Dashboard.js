import React, { Component } from 'react';
import NewNotice from './NewNotice';
import noticeArray from '../mock-data/mock';
import NoticeTable from './NoticeTable';
import ReactTable from 'react-table';
import "react-table/react-table.css";



export default class Dashboard extends Component {


  render () {
    const data = noticeArray;

    return (
      <div className="Dashboard">
        <div className="NoticeList">
          <h2>Notice List</h2>
          <NoticeTable notices={data}></NoticeTable>
        </div>

        <NewNotice></NewNotice>

      </div>
    )
  }
}