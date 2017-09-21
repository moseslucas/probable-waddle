import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Item extends Component {
  render() {
    const {icon, name, onSelectChannel, channel} = this.props
    return (
      <a className='add_new' onClick={()=>{ onSelectChannel(channel)  }}>
      <li className='list-unstyled'>
        <i className={icon}/> { name }
      </li>
      </a>
    )
  }
}
