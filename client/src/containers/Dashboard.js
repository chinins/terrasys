import React, { Component } from 'react';
import NewNotice from './NewNotice';

export default class Dashboard extends Component {
  render () {
    return (
      <div className="Dashboard">
        <div className="NoticeList">
          <div className="Notice">
            <p>id</p>
            <p>Created on Sept 21</p>
            <p>Administration</p>
            <p>Assigned frequency - 987</p>
            <p>Stage - Part 1</p>
            <p>Plan / MIFR</p>

          </div>

          <div className="Notice">
            <p>id</p>
            <p>Created on Sept 21</p>
            <p>Country</p>
            <p>Assigned frequency - 987</p>
          </div>
          <div className="Notice">
            <p>id</p>
            <p>Created on Sept 21</p>
            <p>Country</p>
            <p>Assigned frequency - 987</p>
          </div>

        </div>

        <NewNotice></NewNotice>

      </div>
    )
  }
}