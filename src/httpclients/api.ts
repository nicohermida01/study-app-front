import axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'

axios.defaults.withCredentials = true

const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
	withCredentials: true,
})

const instanceWithCache = setupCache(axiosInstance)

export default instanceWithCache
