import React, { Component } from "react"
import PropTypes from "prop-types"

const Item  = (props) => { 
  const {icon ,name} = props
  return( 
    <li className="list-unstyled">
      <i className={icon}></i> { name }
    </li>
  )
}

export default Item
