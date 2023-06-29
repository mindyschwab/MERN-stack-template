import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../Navbar'
import HomePage from '../HomePage'
import AboutPage from '../AboutPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>Hello World</h1>
    </>
  )
}

export default App
