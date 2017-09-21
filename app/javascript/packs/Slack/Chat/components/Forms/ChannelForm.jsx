import React, { Component } from "react" 
import PropTypes from "prop-types"

export default class ChannelForm extends Component {

  handleSubmit(evt, { nameRef, typeRef, userIdsRef } = params) {
    const { onCreateChannel } = this.props
    evt.preventDefault()     

    let options = [].slice.call(userIdsRef.querySelectorAll('option'))
    let values = options.filter( (option) => { return option.selected } ).map( (option) => { return option.value })

    let newParams = { channel: {
      name: nameRef.value,
      type: typeRef.value,
      user_ids: values
    } }

    onCreateChannel(newParams)
  }

  clearForm(){ 
    document.getElementById('channel_name').innerHtml('')
    document.getElementById('channel_type').innerHtml('')
    document.getElementById('channel_user_ids').innerHtml('')
  }

  renderUsers() {
    const { users } = this.props

    return users.map( (user) => {
      return (
        <option 
          value={ user.id }
          key={ user.id }>
          { user.username }
        </option>
      )
    })
  }

  render() {
    const { onCancelCreateChannel } = this.props
    let nameRef, typeRef, userIdsRef

    return (
      <form onSubmit={ (evt) => { this.handleSubmit(evt, { nameRef, typeRef, userIdsRef }) } } >
        <label htmlFor="channel_name">
          Channel Name
        </label>
        <input 
          ref={ (el) => { nameRef = el } }
          type="text" 
          id="channel_name"/>

        <label htmlFor="channel_type">
          Channel Type
        </label>
        <select
          ref={ (el) => { typeRef = el } }
          id="channel_type">
          <option value="PublicChannel"> Public Channel </option>
          <option value="PrivateChannel"> Private Channel </option>
          <option value="GroupChannel"> Group Channel </option>
        </select>

        <label htmlFor="user_ids">
          Users
        </label>
        <select
          ref={ (el) => { userIdsRef = el } }
          multiple="multple"
          name="user_ids[]"
          id="user_ids">
          { this.renderUsers() }
        </select>

        <div>
          <button type="submit">
            Create
          </button>

          {/* <button  */}
          {/*   type="button"  */}
          {/*   onClick={ () => { onCancelCreateChannel() } }> */}
          {/*   Cancel */}
          {/* </button> */}
        </div>
      </form>
    )
  }
}
