import React, { Component } from "react"
import PropTypes from "prop-types"

class MessageInput extends Component{ 
  willSendMessage(){ 
    const {sendMessage} = this.props
    sendMessage(this.refs.message_input.value)
  }

  render(){ 
    return( 
      <div className="message_input">
        <div className="form-group">
          <div className="btn-group">
            <input 
              ref="message_input"
              className="form-control" />
            <button 
              onClick={()=>{ this.willSendMessage() }}
              className="button button-primary message_send">
              <i className="ion-android-send"/>
            </button>
          </div>
        </div>
      </div>
    )
  }

}
export default MessageInput
