import React, { Component } from "react"
import PropTypes from "prop-types"

const Sidebar = (props) => { 
  return( 
    <div id="sidebar-wrapper">
      {props.children}
    </div>
  )
}

export default Sidebar

