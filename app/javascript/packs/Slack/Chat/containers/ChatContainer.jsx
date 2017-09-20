import React, { Component } from "react"
import PropTypes from "prop-types"
import List from "../components/Sidebar/List"
import Message from "../components/Message/Message"
import MessageInput from "../components/Message/MessageInput"
 
import UsersAPI from "../services/UsersAPI"
import ChannelsAPI from "../services/ChannelsAPI"

export default class ChatContainer extends Component {
  constructor() {
    super()
    this.state = { 
      users: [] ,
      channels: []
    }
  }

  componentWillMount() { UsersAPI.fetchAll({ onSuccess: (response) => {
        this.setState({users: response.data})
      }
    })
    ChannelsAPI.fetchAll({
      onSuccess: (response) => {
        this.setState({
          channels: response.data
        })
      }
    })
  }

  render() {
    const { users, channels } = this.state
    let channelType = { 
      public: channels.filter( f => f.type === 'PublicChannel' ),
      private: channels.filter( f => f.type === 'PrivateChannel' ),
      group: channels.filter( f => f.type === 'GroupChannel' )

    }
    return (
      <div>
        <aside>
          <List 
            type='public'
            title='Public Channels'
            icon='ion-pound'
            items={ channelType.public }/>

          <List 
            type='private'
            title='Private Channels'
            icon='ion-locked'
            items={ channelType.private }/>
          <List 
            type='private'
            title='Group Channels'
            items={ channelType.group }/>

          <List 
            type='direct'
            title='Direct Messages'
            items={ users }/>
        </aside>
        <article>
        </article>
      </div>
    )
  }
}
