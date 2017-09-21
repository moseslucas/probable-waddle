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

export default class ChatContainer extends Component {
  constructor() {
    super()
    this.state = { 
      users: [], 
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
    console.log(params)

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

  render() {
    const { users, channels, createPanel } = this.state
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
                icon={ "hashtags" }
                type={ "Public Channels" }
                icon='ion-pound'
                items={ publicChannels }/>
              <List 
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
            <MessageList/>
            <MessageInput/>
          </MessagePanel>
        </Wrapper>
      </div>
    )
  }
}
