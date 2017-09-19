import React, { Component } from "react"
import PropTypes from "prop-types"

import Item from "./Item";

export default class List extends Component {
  renderUsers() {
    const { items } = this.props

    return items.map( (item) => {
      return (
        <Item
          key={ item.id }
          name={ item.username }/>
      )
    })
  }

  renderChannels(){ 
    const {items} = this.props
    return items.map( (item) => {
      return (
        <Item
          key={ item.id }
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
