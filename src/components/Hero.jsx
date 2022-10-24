import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-5xl flex flex-col justify-center items-center mx-auto mt-32 '>
          <h1 className='text-6xl font-semibold'>Startup Framework</h1>
          <p className='text-xl text-gray-500 text-center max-w-lg mt-8'>We made it so beautiful and simple. It combines landings, pages, blogs and shop screens. It is definitely the tool you need in your collection! </p>

          <button className='mt-20 bg-teal-300 px-20 py-4 rounded-full'>Purchase Now for $248</button>

          <a className='mt-8 text-lg text-teal-400' href="#learnMore"> Learn More</a>
    </div>
  )
}

export default Hero
