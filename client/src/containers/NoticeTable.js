import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import moment from 'moment';

export default class NoticeTable extends Component {
  // validateNotice = () => {

  // }

  // publishNotice = () => {

  // }

  render() {

    const columns = [{
      Header: 'AdmRefID',
      accessor: 'admRefId',
    }, {
      Header: 'Administration',
      accessor: 'administration',
    }, {
      Header: 'FreqAssign',
      accessor: 'freqAssigned',
    }, {
      Header: 'Validation',
      accessor: 'validation',
      Cell: row => (
        <div>
          <span>{row.original.validation}</span>
          <button onClick={this.validateNotice}>Validate</button>
        </div>
      )
    }, {
      Header: 'Published',
      accessor: 'published',
      Cell: row => (
        <div>
          <span>{row.original.published ? 'Published' : 'Not published'}</span>
          <button onClick={this.publishNotice}>Publish</button>
        </div>
      )
    }, {
      Header: 'Created',
      id: 'dateTime',
      accessor: data => moment(data.date).format('MMMM Do YYYY, h:mm a')
    }]

    return (
      <ReactTable data={this.props.notices} columns={columns}
        defaultPageSize={this.props.notices.length} className="-striped -highlight"
        className="-striped -highlight NoticeTable"
      />
    )
  }
}
