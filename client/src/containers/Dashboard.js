import React, { Component } from 'react';
import NoticeTable from './NoticeTable';
import NewNotice from './NewNotice';

export default class Dashboard extends Component {
  state = {
    search: ''
  }

  handleChange = async (e) => {
    await this.setState({
      search: e.target.value
    })
    this.props.onSearch(this.state.search);
  }

  render () {
    const { ...properties } = this.props;
    return (
      <div className="Dashboard">
        <div className="NoticeList">
          <div className="title-search">
            <h2>Notice List</h2>
            <div className="search">
              <input type="text" placeholder="Search by AdmRefID" value={this.state.search}
                onChange={this.handleChange}></input>
            </div>
          </div>
          <NoticeTable {...properties}></NoticeTable>
        </div>
        <NewNotice onNoticeCreate={this.props.onNoticeCreate}/>
      </div>
    )
  }
}
