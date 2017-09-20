import React, { Component } from "react"
import PropTypes from "prop-types"

const MessagePanel = (props) => { 
  return( 
    <div id="page-content-wrapper">
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessagePanel
