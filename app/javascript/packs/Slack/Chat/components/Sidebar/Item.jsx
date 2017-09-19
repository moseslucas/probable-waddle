import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Item extends Component {
  render() {
    const {icon ,name} = this.props
    return (
      <li className="list-unstyled">
        <i className={icon}></i> { name }
      </li>
    )
  }
}
