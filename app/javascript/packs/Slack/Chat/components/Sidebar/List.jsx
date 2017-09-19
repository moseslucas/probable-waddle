import React, { Component } from "react"
import PropTypes from "prop-types"

import Item from "./Item";

export default class List extends Component {
  renderUsers() {
    const { items, icon } = this.props

    return items.map( (item) => {
      return (
        <Item
          key={ item.id }
          icon= {icon}
          name={ item.username }/>
      )
    })
  }

  renderChannels(){ 
    const {items, icon} = this.props
    return items.map( (item) => {
      return (
        <Item
          key={ item.id }
          icon={icon}
          name={ item.name }/>
      )
    })
  }

  renderMain(){ 
    const { type,items } = this.props
    switch(type){ 
      case 'direct':
        return this.renderUsers()
      break
      default:
        return this.renderChannels()
    }
  }

  render() {

    return (
      <div>
        {this.props.title}
        <ul>
          { this.renderMain() }
        </ul>
      </div>
    )
  }
}
