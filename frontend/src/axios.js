import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:3005/api/v1/'
})

export default axiosInstance
