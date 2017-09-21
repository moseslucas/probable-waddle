import React, { Component } from "react"
import PropTypes from "prop-types"
import List from "../components/Sidebar/List"
import Message from "../components/Message/Message"
import MessageInput from "../components/Message/MessageInput"
import ChannelForm from "../components/Forms/ChannelForm"
import CreatePanel from "../components/Forms/CreatePanel"
import Sidebar from '../components/Sidebar/sidebar'
import Wrapper from '../components/Sidebar/wrapper'
import MessagePanel from '../components/Message/message_panel'
import MessageList from '../components/Message/MessageList'
import TopNav from '../components/Message/TopNav'
 
import UsersAPI from "../services/UsersAPI"
import ChannelsAPI from "../services/ChannelsAPI"
import MessagesAPI from "../services/MessagesAPI"

export default class ChatContainer extends Component {
  constructor() {
    super()
    this.state = { 
      users: [], 
      currentChannel: { 
        id: '',
        type: '',
        messages: [],
        users: [],
      },
      channels: [] ,
      createPanel: { 
        channel: false,
        direct: false
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
        this.setState({ channels: response.data } )
      }
    })
  }

  createChannel(params) {
    const { channels } = this.state

    ChannelsAPI.create({
      data: params,
      onSuccess: (response) => {
        this.setState({ channels: channels.concat(response.data) })
      }
    })
  }

  toggleCreatePanel(panel) {
    switch(panel){ 
      case 'channel':
        this.setState({createPanel: { channel: !this.state.createPanel.channel }})
      break
      default:
        this.setState({createPanel: { direct: !this.state.createPanel.channel }})

    }
  }

  selectChannel(params){ 
    MessagesAPI.fetchAll({ 
      onSuccess: (response) => { 
        this.setState({ currentChannel: { 
          id: params.id,
          type: params.type,
          messages: response.data
        }})
      },
      id: params.id
    })
  }

  sendMessage(message){ 
    const {currentChannel} = this.state
    const params = { 
      content: message,
      receiveable_type: currentChannel.type,
      receiveable_id: currentChannel.id
    }
    let newCurrentChannel = {...currentChannel}
    MessagesAPI.create({ 
      data: params,
      onSuccess: (response) => { 
        newCurrentChannel.messages = newCurrentChannel.messages.concat(response.data)
        this.setState({currentChannel: newCurrentChannel})
      }
    })
  }

  render() {
    const { users, channels, createPanel, currentChannel } = this.state
    const publicChannels = channels.filter( (member) => { return member.type === "PublicChannel" } )
    const privateChannels = channels.filter( (member) => { return member.type === "PrivateChannel" } )
    const groupChannels = channels.filter( (member) => { return member.type === "GroupChannel" } )

    return (
      <div>
        <CreatePanel 
          closePanel={ (visible)=>{ this.setState({createPanel: {channel: visible}})  } }
          visible= {this.state.createPanel.channel}
          title='Create a Channel'>
          <ChannelForm 
            onCreateChannel={ (params)=>{ this.createChannel(params) } }
            users={users}/>
        </CreatePanel>
        <CreatePanel 
          closePanel={ (visible)=>{ this.setState({createPanel: {direct: visible}})  } }
          visible= {this.state.createPanel.direct}
          title='Direct Messages'>
        </CreatePanel>

        <Wrapper>
          <Sidebar>
            <div>
              <List 
                onClickCreateChannel={ () => { this.toggleCreatePanel('channel') } }
                onSelectChannel={ (params)=>{ this.selectChannel(params) } }
                icon={ "hashtags" }
                type={ "Public Channels" }
                icon='ion-pound'
                items={ publicChannels }/>
              <List 
                onSelectChannel={ (params)=>{ this.selectChannel(params) } }
                onClickCreateChannel={ () => { this.toggleCreatePanel('channel') } }
                icon={ "ion-locked" }
                type={ "Private Channels" }
                items={ privateChannels }/>
              <List 
                onClickCreateChannel={ () => { this.toggleCreatePanel('direct') } }
                type={ "Direct Messages" }
                icon={ "circle" }
                items={ users }/>
              </div>
          </Sidebar>
          <MessagePanel>
            <TopNav/>
            <MessageList currentChannel={currentChannel}/>
            <MessageInput sendMessage={ params => this.sendMessage(params) }/>
          </MessagePanel>
        </Wrapper>
      </div>
    )
  }
}
