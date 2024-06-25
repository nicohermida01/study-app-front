import axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'

const API_URL = 'http://docker.localhost:8001/api'

axios.defaults.withCredentials = true

const axiosInstance = axios.create({
	baseURL: API_URL,
	withCredentials: true,
})

const instanceWithCache = setupCache(axiosInstance)

export default instanceWithCache
