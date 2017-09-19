import API from './API'

const ChannelsAPI = {
  fetchAll({onSuccess}) {
    API({
      url: "api/v1/channels",
      method: "GET",
      onSuccess: onSuccess
    })
  }
}

export default ChannelsAPI
