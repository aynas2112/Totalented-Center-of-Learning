import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'

const Home = () => {
  
  return (
    <>
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full h-screen">
      <div>
      <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className='text-slate-300 text-center text-5xl font-style: italic'>
      Learning is a treasure that will follow its owner everywhere.
      </div>
    </div>
    </>
  )
}

export default Home

// 'max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'