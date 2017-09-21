import React, { Component } from "react"
import PropTypes from "prop-types"

class MessageInput extends Component{ 
  willSendMessage(evt){ 
    const {sendMessage} = this.props
    const message = this.refs.message_input.value
    evt.preventDefault()     
    this.clear()
    sendMessage(message)
  }

  clear(){ 
    this.refs.message_input.value = ''
  }

  render(){ 
    return( 
      <div className="message_input">
        <form onSubmit={ (evt)=>{ this.willSendMessage(evt) }  }>
          <input 
            ref="message_input"/>
          <button 
            type='submit'
            className="button button-primary message_send">
            <i className="ion-android-send"/>
          </button>
        </form>
      </div>
    )
  }

}
export default MessageInput
