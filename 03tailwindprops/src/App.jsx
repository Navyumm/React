import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Navyum",
    age: 24
  }

  let newArr = [1,2,3]

  return (
    <>
        <h1 className="bg-green-800 text-black-900 p-4 rounded-xl">Tailwind Test</h1>
        <Card name="Navyum" btnText="Visit me" />
        <Card name="Navi"/>
    </>
  )
}

export default App
