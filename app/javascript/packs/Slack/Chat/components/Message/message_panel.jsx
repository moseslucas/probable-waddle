import React, { Component } from "react"
import PropTypes from "prop-types"

const MessagePanel = (props) => { 
  return( 
    <div id="page-content-wrapper">
      <div className="page-content">
        {props.children}
      </div>
    </div>
  )
}

export default MessagePanel
