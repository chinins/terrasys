import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import Link from 'react-router-dom/Link';

export default class NoticeTable extends Component {

  render() {

    const columns = [{
      Header: 'AdmRefID',
      accessor: 'admRefId',
      Cell: ({ row }) => (<Link to={`/details/:${row.admRefId}`}>{row.admRefId}</Link>)
    }, {
      Header: 'Administration',
      accessor: 'administration',
      Cell: ({ row }) => (<Link to={`/details/:${row.admRefId}`}>{row.administration}</Link>)
    }, {
      Header: 'FreqAssign',
      accessor: 'freqAssigned',
      Cell: ({ row }) => (<Link to={`/details/:${row.admRefId}`}>{row.freqAssigned}</Link>)
    }, {
      Header: 'Fragment',
      accessor: 'fragment',
      Cell: ({ row }) => (<Link to={`/details/:${row.admRefId}`}>{row.fragment}</Link>)
    }, {
      Header: 'State',
      accessor: 'stage',
      Cell: ({ row }) => (<Link to={`/details/:${row.admRefId}`}>{row.stage}</Link>)
    }, {
      Header: 'Creation Date',
      accessor: 'date',
      Cell: ({ row }) => (<Link to={`/details/:${row.admRefId}`}>{row.date}</Link>)
    }]

    return (
      <ReactTable data={this.props.notices} columns={columns}
        getTrProps={(state, rowInfo, column, instance) => ({

          onClick: () => this.props.onRowClick(rowInfo.original)
        })}
        defaultPageSize={this.props.notices.length} className="-striped -highlight"
        className="-striped -highlight NoticeTable"
      />
    )
  }
}
