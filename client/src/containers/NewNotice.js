import React, { Component } from 'react';

const stages = ['Unknown', 'Recieved', 'PreProccessed', 'InProcess', 'Completed', 'Paused', 'Removed'];
const fragments = ['GEO6', 'ST61', 'NTFD_RR'];

export default class NewNotice extends Component {
  state = {
    admRefId: '',
    administration: '',
    freqAssigned: '',
    stage: stages[1],
    fragment: fragments[0]
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

  handleStageChange = (e) => {
    this.setState({
      stage: e.target.value
    })
  }

  handleFragmentChange = (e) => {
    this.setState({
      fragment: e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.onNoticeCreate(this.state);
    this.setState({
      admRefId: '',
      administration: '',
      freqAssigned: '',
      stage: stages[1],
      fragment: fragments[0]
    })
  }

  renderDropDown = (arr) => {
    return arr.map((el, index) => (
      <option value={el} key={index}>{el}</option>
    ))
  }

  render () {
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
            <select value={this.state.stage} onChange={this.handleStageChange}>
              {this.renderDropDown(stages)}
            </select>
          </label>
          <label>Fragment
            <select value={this.state.stage} onChange={this.handleFragmentChange}>
              {this.renderDropDown(fragments)}
            </select>
          </label>
          <input type="submit" value="Add Notice"></input>
        </form>
      </div>
    )
  }
}