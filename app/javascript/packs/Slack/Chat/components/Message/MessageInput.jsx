import React, { Component } from "react"
import PropTypes from "prop-types"

const MessageInput = (props) => { 
  return( 
    <div className="message_input">
      <div className="form-group">
        <div className="btn-group">
          <input 
            className="form-control" />
          <button 
            className="button button-primary message_send">
            <i className="ion-android-send"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MessageInput
