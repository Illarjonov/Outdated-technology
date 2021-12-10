import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-main-default-rtdb.europe-west1.firebasedatabase.app'
})
