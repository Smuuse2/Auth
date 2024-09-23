import React from 'react'
import { createBrowserRouter, Outlet, Route, useLocation } from 'react-router-dom'
import Login from './Login'
import Navbar from './components/Navbar'
import Posts from './components/Pages/Posts'
import Notfound from './components/Notfound'
import Home from './components/Pages/Home'
import Footer from './components/Pages/Footer'
import SignUp from './SignUp'

const Routes = () => {
  const location = useLocation();
  
  // Determine if the Navbar should be hidden based on the current path
  const shouldHideNavbar = location.pathname === '/login' || location.pathname === '/signUp';
  return (
    <div>
      <div>
      {!shouldHideNavbar && <Navbar />}
      </div>
      <div><Outlet/></div>
      <div><Footer/></div>
    </div>
  )
}

export default Routes

export const Dallaf = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    children: [
      {
        path: "/", 
        element: <Home />
      },
      {
        path: "/login",
        element: <Login/>
    },
      {
        path: "/signUp", // relative path
        element: <SignUp />
      },
      {
        path: "posts", // relative path
        element: <Posts />
      },
    
   
    
      {
        path: "*", // Catch-all route
        element: <Notfound />
      }
    ]
  }
])
