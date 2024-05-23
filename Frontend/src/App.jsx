import { RouterProvider } from 'react-router-dom'
import { router } from './router/index'
import { HomePage } from './pages/HomePage'

import './App.css'

function App () {
  return (
   <RouterProvider router={router}>
    <HomePage />
   </RouterProvider>
  )
}

export default App
