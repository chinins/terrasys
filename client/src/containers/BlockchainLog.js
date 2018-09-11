import React, { Component } from 'react';
import Message from '../components/Message';

export default class BlockChainLog extends Component {

  renderMessages = () => {
    return this.props.messages.map(message => (
      <Message key={message._id} message={message}></Message>
    ))
  }

  render () {
    return (
      <div className="BlockchainLog">
        <h3>Blockchain Log</h3>
        {this.renderMessages()}
      </div>
    )
  }
}