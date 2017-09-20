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
      channels: { 
        public: [],
        private: [],
        group: []
      }
    }
  }

  componentWillMount() {
    UsersAPI.fetchAll({
      onSuccess: (response) => {
        this.setState({users: response.data})
      }
    })
    ChannelsAPI.fetchAll({
      onSuccess: (response) => {
        this.setState({
          channels: {
            public : response.data.filter( f => f.type === "PublicChannel" ),
            private : response.data.filter( f => f.type === "PrivateChannel" ),
            group : response.data.filter( f => f.type === "GroupChannel" )
          }
        })
      }
    })
  }

  render() {
    const { users, channels } = this.state

    return (
      <div>
        <aside>
          <List 
            type='public'
            title='Public Channels'
            icon='ion-pound'
            items={ channels.public }/>

          <List 
            type='private'
            title='Private Channels'
            icon='ion-locked'
            items={ channels.private }/>
          <List 
            type='private'
            title='Group Channels'
            items={ channels.group }/>

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
