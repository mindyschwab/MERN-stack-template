import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar'
import HomePage from '../HomePage'
import AboutPage from '../AboutPage'
import './App.css'

function App() {

  return (
    <Router>
      <Navbar />
      <main>
        <h1>Hello World</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
