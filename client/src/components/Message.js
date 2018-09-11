import React, { Component } from 'react';
import moment from 'moment';

export default class Message extends Component {
  render () {
    return (
      <div className="message">
        <span className="message-time">{moment(this.props.message.dateTime).format('DD/MM/YY LT')}</span>
        {this.props.message.title}
      </div>
    )
  }
}