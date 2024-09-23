import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Posts = () => {

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
     <div
  class="block  bg-white shadow-secondary-1 dark:bg-surface-dark">
  <a href="#!">
    <img
      class=" w-full  min-h-44"
      src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
      alt="" />
  </a>
  <div class="p-6 text-surface ">
    <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
    <p class="mb-4 text-base">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <button
      type="button"
      class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      data-twe-ripple-init
      data-twe-ripple-color="light">
      Button
    </button>
  </div>
</div>
    </div>
  )
}

export default Posts
