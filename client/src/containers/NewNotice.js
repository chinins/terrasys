import React, { Component } from 'react';

export default class NewNotice extends Component {
  render () {
    return (
      <div className="NewNotice">New Notice
        <form className="new-notice-form">
          <input type="text" placeholder="id"></input>
          <input type="text" placeholder="Country"></input>
          <input type="text" placeholder="Assigned Frequency"></input>
          <input type="submit" value="Add Notice"></input>
        </form>
      </div>
    )
  }
}