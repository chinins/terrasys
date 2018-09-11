import React, { Component } from 'react';

export default class NewNotice extends Component {
  state = {
    admRefId: '',
    administration: '',
    freqAssigned: ''
  }

  handleIdChange = (e) => {
    this.setState({
      admRefId: e.target.value
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
    this.props.onNoticeCreate(this.state);
    this.setState({
      admRefId: '',
      administration: '',
      freqAssigned: ''
    })
  }

  render () {
    return (
      <div className="NewNotice">New Notice
        <form className="new-notice-form" onSubmit={this.submitForm}>
          <label>
            <input type="text" placeholder="AdmRefID" onChange={this.handleIdChange} value={this.state.admRefId}></input>
          </label>
          <label>
            <input type="text" placeholder="Administration" onChange={this.handleAdminChange} value={this.state.administration}></input>
          </label>
          <label>
            <input type="text" placeholder="Assigned Frequency" onChange={this.handleFreqChange} value={this.state.freqAssigned}></input>
            </label>
          <input type="submit" value="Add Notice"></input>
        </form>
      </div>
    )
  }
}