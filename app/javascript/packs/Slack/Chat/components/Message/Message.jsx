import React, { Component } from "react"
import PropTypes from "prop-types"

const Message = (props) => { 
  return( 
    <div className="message">
    { 
      props.messages.map((message,i)=>{ 
        return <div key={i}><small>{message.content}</small><br/></div>
      })
    }
    </div>
  )
}

export default Message
