import React, { Component } from "react"
import PropTypes from "prop-types"

import Item from "./Item";

export default class List extends Component {
  renderItems() {
    const { items, icon } = this.props

    return items.map( (item) => {
      return (
        <Item
          key={ item.id }
          icon= {icon}
          name={ item.username || item.name }/>
      )
    })
  }


  render() {

    return (
      <div>
        {this.props.title}
        <ul>
          { this.renderItems() }
        </ul>
      </div>
    )
  }
}
