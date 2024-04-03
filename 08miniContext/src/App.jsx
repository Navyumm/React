
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Heeyoo Guysss</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
