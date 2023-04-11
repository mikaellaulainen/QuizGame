import axios from 'axios'
const url = 'api/users'

const createUser = async credentials => {
  const res = await axios.post(url, credentials)
  return res.data
}

export default { createUser }