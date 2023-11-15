import axios from 'axios'
const baseUrl = `http://localhost:3001/people`

const getAll = async () => {
  const response = await axios.get(baseUrl)
  const data = await response.data
  return data
}

export default { getAll }
