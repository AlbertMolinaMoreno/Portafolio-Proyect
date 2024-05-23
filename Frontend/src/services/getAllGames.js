import { api } from './config.js'

export async function getAllGames () {
  const { data } = await api.get('/games', {
    params: {
      key: import.meta.env.VITE_API_KEY,
      page: 1
    }

  })
  return (data)
}
