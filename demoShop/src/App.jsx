import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Products from './components/Products'
import NewProduct from './components/NewProduct'

import './App.css'

function App() {
 
 const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    { 
      id: 'p2', 
      title: 'Sirf Excel', 
      amount: 200, 
      date: new Date(2021, 2, 2) },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];

  // for data that have been passed from child to parent
  function printProductData(data){
    console.log(" i am inside App.jsx")
    console.log(data);
    
  }

  return (
    <div>
      <NewProduct  printProduct={printProductData}/>
      <Products items={products} />
    </div>
  );

}

export default App
