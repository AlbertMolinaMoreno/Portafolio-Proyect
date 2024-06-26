import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
