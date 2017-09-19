// generic api function
import axios from "axios"

const API = ({ 
  url,
  data = {},
  method = 'GET',
  onSuccess,
  onError = (error) => { console.error(error) },
  onComplete = () => {} 
  }) => {

    if (method === 'GET') {
      axios.get(url).then(onSuccess).catch(onError)
    } else {
    }
  }

export default API;
