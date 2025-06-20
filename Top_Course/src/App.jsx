import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spiner from './components/Spiner'

import { apiUrl, filterData } from './Data'





function App() {

  const [courses, setCources] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [category, setCategory] =useState(filterData[0].title);


  useEffect(() => {
    const fetchData = async () => {

      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCources(output.data);
      }

      catch (error) {
        toast.error("Check your internet");
        setError(true);
      }

      setLoading(false);
    }
    fetchData();
  }, []);


  





  return (
    <div className='flex flex-col  min-h-screen bg-[#4a4e69]'>

      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
      </div>

<div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
  {
    loading ? (<Spiner />) :
     error ? (
      <div className="flex flex-col items-center justify-center text-center bg-white shadow-lg p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Not Found</h1>
        <p className="text-gray-700 mb-4">
          Failed to load courses. Please check your connection or try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
        >
          Refresh Page
        </button>
      </div> 
      ) : 
    (<Cards courses={courses} category={category} />)
  }
</div>



    </div>
  )
}

export default App
