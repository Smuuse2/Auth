import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='block w-full max-w-screen-lg px-4 py-2 mx-auto   lg:px-8 lg:py-3 mt-10'>
      <div class="">
    <div class="h-screen flex flex-col justify-center items-center">
        <h1 class="text-8xl font-bold text-gray-800">404</h1>
        <p class="text-4xl font-medium text-gray-800">Page Not Found</p>
        <Link to={'/'} href="/" class="mt-4 text-xl text-blue-600 hover:underline">Go back home</Link>
    </div>
</div>
    </div>
  )
}

export default Notfound
