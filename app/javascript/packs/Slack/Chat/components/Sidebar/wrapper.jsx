import React, { Component } from "react"
import PropTypes from "prop-types"

const Wrapper = (props) => { 
  return( 
    <div id="wrapper">
      {props.children}
    </div>
  )
}

export default Wrapper
