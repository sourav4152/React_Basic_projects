import React from 'react'
import './Spinner.css'

const Spiner = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='spinner'></div>
        <p className='text-[#22223b] text-lg font-semibold'>Loading...</p>
    </div>
  )
}

export default Spiner