import axios from 'axios'

export default axios.create({
  baseURL: import.meta.env.DEV



    ? 'http://localhost:3000/api'
    : 'https://tossd.vercel.app'
})