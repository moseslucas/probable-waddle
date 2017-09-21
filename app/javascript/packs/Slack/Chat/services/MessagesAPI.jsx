import API from './API'

const MessagesAPI = {
  fetchAll({onSuccess, id}) {
    API({
      url: `api/v1/messages/${id}`,
      method: "GET",
      onSuccess: onSuccess
    })
  }
}

export default MessagesAPI
