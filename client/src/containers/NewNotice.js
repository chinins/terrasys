import React, { Component } from 'react';

export default class NewNotice extends Component {
  state = {
    adminRefId: '',
    administration: '',
    freqAssigned: ''
  }

  handleIdChange = (e) => {
    this.setState({
      adminRefId: e.target.value
    })
  }

  handleAdminChange = (e) => {
    this.setState({
      administration: e.target.value
    })
  }

  handleFreqChange = (e) => {
    this.setState({
      freqAssigned: Number(e.target.value)
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log('got here')
    this.props.onNoticeCreate(this.state);
    this.setState({
      adminRefId: '',
      administration: '',
      freqAssigned: ''
    })
  }

  render () {
    return (
      <div className="NewNotice">New Notice
        <form className="new-notice-form" onSubmit={this.submitForm}>
          <input type="text" placeholder="AdminRefID" onChange={this.handleIdChange} value={this.state.adminRefId}></input>
          <input type="text" placeholder="Administration" onChange={this.handleAdminChange} value={this.state.administration}></input>
          <input type="text" placeholder="Assigned Frequency" onChange={this.handleFreqChange} value={this.state.freqAssigned}></input>
          <input type="submit" value="Add Notice"></input>
        </form>
      </div>
    )
  }
}