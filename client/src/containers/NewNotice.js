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

  renderDropDown = (arr) => {
    return arr.map((el, index) => (
      <option value={el} key={index}>{el}</option>
    ))
  }

  render () {
    const stages = ['Unknown', 'Recieved', 'PreProccessed', 'InProcess', 'Completed', 'Paused', 'Removed'];
    const fragments = ['GEO6', 'ST61', 'NTFD_RR'];

    return (
      <div className="NewNotice">New Notice
        <form className="new-notice-form" onSubmit={this.submitForm}>
          <label>AdmRefID
            <input type="text" placeholder="AdmRefID" onChange={this.handleIdChange} value={this.state.admRefId}></input>
          </label>
          <label>Administration
            <input type="text" placeholder="Administration" onChange={this.handleAdminChange} value={this.state.administration}></input>
          </label>
          <label>Assigned Frequency
            <input type="text" placeholder="Assigned Frequency" onChange={this.handleFreqChange} value={this.state.freqAssigned}></input>
            </label>
          <label>State
            <select value={this.state.stage}>
              {this.renderDropDown(stages)}
            </select>
          </label>
          <label>Fragment
            <select value={this.state.stage}>
              {this.renderDropDown(fragments)}
            </select>
          </label>
          <input type="submit" value="Add Notice"></input>
        </form>
      </div>
    )
  }
}