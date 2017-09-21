import React, { Component } from "react"
import PropTypes from "prop-types"
import Message from './Message'

const MessageList = (props) => { 
  const {messages} = props.currentChannel

  return( 
    <div className="message_list">
      <Message messages={messages} />
    </div>
  )
}

export default MessageList
