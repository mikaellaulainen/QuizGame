import axios from 'axios'
const baseUrl = '/api/quizzes'

const getQuizzes = () => {
  const req =  axios.get(baseUrl)
  return req.then(res => res.data)
}

export default { getQuizzes }