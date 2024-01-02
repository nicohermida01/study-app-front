import axios from 'axios'

const API_URL = 'http://localhost:8000/api'

axios.defaults.withCredentials = true

const axiosInstance = axios.create({
	baseURL: API_URL,
	withCredentials: true,
})

export default axiosInstance
