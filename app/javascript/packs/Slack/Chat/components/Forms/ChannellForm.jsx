import React, { Component } from "react"
import PropTypes from "prop-types"

export default class ChanellForm extends Component {
  render() {
    return (
      <form   >
        <label htmlFor="channel_name">
          Channel Name
        </label>
        <input 
          type="text" 
          ref='channel_name'
          id="channel_name"/>

        <label htmlFor="channel_type">
          Channel Type
        </label>
        <select
          ref='channel_type'
          id="channel_type">
          <option value="PublicChannel"> Public Channel </option>
          <option value="PrivateChannel"> Private Channel </option>
          <option value="GroupChannel"> Group Channel </option>
        </select>

        <label htmlFor="user_ids">
          Users
        </label>
        <select
          ref='channel_users'
          multiple="multple"
          name="user_ids[]"
          id="user_ids">
        </select>

        <div>
          <button type="submit">
            Create
          </button>

        </div>
      </form>
    )
  }
}
