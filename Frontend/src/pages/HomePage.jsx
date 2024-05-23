import { useEffect, useState } from 'react'
import { getAllGames } from '../services/getAllGames'

export const HomePage = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    const gamesData = async () => {
      try {
        const data = await getAllGames()
        setGames(data)
      } catch (error) {
        console.log(error)
      }
    }

    gamesData()
  }, [])

  return (
    <section>
      {
        games.map((game) => (
          <li key={game.id}>
            <h2>{game.name}</h2>
            <img src={game.background_image} alt="" width="300px"/>
          </li>
        ))
      }
    </section>
  )
}
