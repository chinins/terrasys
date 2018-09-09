import React, { Component } from 'react';

export default class NoticeDetails extends Component {
  render () {
    const { admRefId, administration, date, freqAssigned, stage, fragment } = this.props.notice;
    return (
      <div className="Notice">
        <div className="notice-data"> Notice details
          <p>{admRefId}</p>
          <p>{`Created on ${date}`}</p>
          <p>{administration}</p>
          <p>{`Assigned frequency - ${freqAssigned}`}</p>
          <p>{`Stage - ${stage}`}</p>
          <p>{`Plan / MIFR: ${fragment}`}</p>
        </div>
        <div className="notice-actions">Notice actions
          <label>
            <button>Move to next stage</button>
          </label>
          <label>
            <button>Move to next fragment</button>
          </label>
        </div>
      </div>
    )
  }
}