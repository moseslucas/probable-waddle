import React, { Component } from "react"
import PropTypes from "prop-types"

import Item from "./Item";

export default class List extends Component {
  renderUsers() {
    const { items, icon } = this.props

    return items.map( (item) => {
      console.log(item.users)
      return (
        <Item
          icon={icon}
          key={ item.id }
          name={ item.username || item.name }/>
      )
    })
  }

  renderAddButton(){ 
    const {onClickCreateChannel} = this.props
    if(onClickCreateChannel !== undefined)
      return( 
        <a 
          className='add_new' 
          onClick={ () => { onClickCreateChannel() } } >
          <i className='ion-plus-circled'/>
        </a>
      )
  }

  render() {
    const { type, items } = this.props

    return (
      <div>
        { type } {this.renderAddButton()}
        <ul>
          { this.renderUsers() }
        </ul>
      </div>
    )
  }
}
