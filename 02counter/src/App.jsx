import { useState } from 'react'                    // hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  // let [counter, setCounter] = useState()

  // let counter = 5;

  const addValue = () => {
    // if (counter >= 0 && counter < 20) {
    //   setCounter(counter + 1)
    // } 
    // console.log("Clicked", counter);
    // counter = counter + 1;
    setCounter(counter + 1)
    //? agr hum ye 2-3 baar likh denge to hmare paas kya output aayega?
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
  }

  // issai kuch farq nhi pdega because of useState
  // ye data ko batches me bhejta hai, So jab ye chlega to sbhi ko ek sath batches me bheja jayega, isiliye ye sb as anormal kaam karega, jaise ek baar likhne par karta hai 
  
  // ab agr fir bhi hume aise change karna hai toh isko ((preCounter)=> preCounter + 1) likhna hoga, ab jintni baar hum ye likhenge utna add hokr hmare paas ab value aayegi

  const removeValue = () => {
    // console.log("Clicked", counter);
    // counter = counter + 1;
    // setCounter(counter - 1)
    if (counter > 0) {
      setCounter(counter - 1)
    } 
  }

  return (
    <>
      <h1> welcome to React</h1>
      <h2> counter value: {counter}</h2>

      <button
      onClick={addValue}> Add Value {counter}</button> 
      <br/>
      <button
      onClick={removeValue}> Remove Value {counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
