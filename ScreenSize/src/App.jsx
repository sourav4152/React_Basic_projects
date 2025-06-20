import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScreenSize from './component/ScreenSize'
function App() {
 
  return (
    <>
      {/* <input type="text" onChange={changeHandler} /> */}
      <ScreenSize></ScreenSize>

    </>
  )
}

export default App




// learing

 // const [text, setText] = useState("");

  // varient 1 ->render every time text changes
  // useEffect(( ) =>{
  //   console.log("useEffect called");
  // })

  // varient 2 -> render only once
  //   useEffect(( ) =>{
  //   console.log("useEffect called");
  // }, [])

  // varient 3 -> render only when text changes
  //     useEffect(( ) =>{
  //   console.log("useEffect called");
  // }, [text]);

  // varient 4 -> to hendle unmounting of a component
  // useEffect(() => {
  //   //add new event listeners and remove previous one
  //   console.log("listener added");

  //   return () => {
  //     console.log("listener removed");
  //   }

  // })


  // function changeHandler(event) {
  //   setText(event.target.value);
  //   console.log(text);
  // }
