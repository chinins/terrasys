import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

export default class NoticeTable extends Component {

  render() {

    const columns = [{
      Header: 'AdmRefID',
      accessor: 'admRefId'
    }, {
      Header: 'Administration',
      accessor: 'administration'
    }, {
      Header: 'FreqAssign',
      accessor: 'freqAssigned'
    }, {
      Header: 'Fragment',
      accessor: 'fragment',
    }, {
      Header: 'State',
      accessor: 'stateStage'
    }, {
      Header: 'Creation Date',
      accessor: 'date'
    }]

    return (
      <ReactTable data={this.props.notices} columns={columns}
        defaultPageSize={this.props.notices.length} className="-striped -highlight"
        className="-striped -highlight NoticeTable"
      />
    )
  }
}
