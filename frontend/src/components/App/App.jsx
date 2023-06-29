import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar'
import HomePage from '../HomePage'
import AboutPage from '../AboutPage'
import ProjectsPage from '../ProjectsPage'
import './App.css'

function App() {

  return (
    <Router>
      <Navbar />
      <main>
        <h1>Hello World! Welcome to Mindy's portfolio</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
