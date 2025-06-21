import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Testimonial from './components/Testimonial'
import reviews from './data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Our Testimonial</h1>
        <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto'></div>
        <Testimonial reviews={reviews} />
      </div>
    </div>
  )
}

export default App
