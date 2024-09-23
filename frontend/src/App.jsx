import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dallaf } from './Routes'
const App = () => {
  return (
    <div>
      <RouterProvider  router={Dallaf} />
    </div>
  )
}

export default App

