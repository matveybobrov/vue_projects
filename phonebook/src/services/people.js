import axios from 'axios'
const baseUrl = `http://localhost:3001/people`

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data)
}

const create = async (person) => {
  return axios.post(baseUrl, person).then((response) => response.data)
}

export default { getAll, create }
