import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000'

const getProjectsContent = () => {
  return axios.get('/projects')
}

export default {
  getProjectsContent
}