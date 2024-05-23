import './App.css'
import React from 'react'
import { getAllGames } from './services/getAllGames.js'
import { useState,useEffect} from 'react'

function App() {
  const [games,SetGames] = useState([])

  useEffect(() => {
    AllGames()
  },[])

  async function AllGames() {
    const {results} = await getAllGames() 
    SetGames(results)
  }
  if(games.length == 0){
    console.log("no hay nada")
  } else {
    console.log(games)
  }
  
  return (
   <div>
        HOLA
   </div>
  )
}

export default App
