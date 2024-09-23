import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

  const token = JSON.parse(localStorage.getItem("userInfo"))?.accessToken
  // hadii uu jiro user ku
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className='block w-full max-w-screen-lg px-4 py-2 mx-auto bg-slate-50  border   lg:px-8 lg:py-3 mt-10'>
      <Link to={'signUp'}>Lorem10</Link>
    </div>
  )
}

export default Home
