import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tours from './components/Tours'
import Data from './data'
function App() {

  const [tours, setTours] = useState(Data);

  function removetour(id) {

    const newTours = tours.filter(tours => tours.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className='flex flex-col justify-center items-center gap-5 h-screen'>
        <h2 className='text-2xl font-bold'>No tours left</h2>
        <button  onClick={() => setTours(Data)} 
        class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 active:scale-95 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v6h6M20 20v-6h-6M4 20l16-16" />
          </svg>
          Refresher
        </button>
      </div>
    );
  }

  return (
    <div className='max-w-[100vw] flex flex-col justify-center gap-10 over '>
      <Tours tours={tours} removetour={removetour} ></Tours>
    </div>
  )

}

export default App;
