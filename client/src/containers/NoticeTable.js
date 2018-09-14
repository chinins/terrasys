import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import moment from 'moment';

export default class NoticeTable extends Component {
  validateNotice = () => {

  }

  publishNotice = () => {

  }

  render() {

    const columns = [{
      Header: 'AdmRefID',
      accessor: 'admRefId',
    }, {
      Header: 'Administration',
      accessor: 'administration',
    }, {
      Header: 'FreqAssign',
      accessor: 'freqAssign',
    }, {
      Header: 'Created',
      id: 'dateTime',
      accessor: data => moment(data.date).format('DD/MM/YY')
    }, {
      Header: 'Validation',
      accessor: 'validation',
      Cell: row => (
        <div>
          <span>{row.original.validation}</span>
          <button onClick={() => this.props.onValidate(row.original)}>Validate</button>
        </div>
      )
    }, {
      Header: 'Published',
      accessor: 'published',
      Cell: row => (
        <div>
          <span>{row.original.published ? 'True' : 'False'}</span>
          <button onClick={() => this.props.onPublish(row.original)}>Publish</button>
        </div>
      )
    }]

    return (
      <ReactTable data={this.props.notices} columns={columns}
        defaultPageSize={5} className="-striped -highlight NoticeTable"
      />
    )
  }
}
