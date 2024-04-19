import './App.css'
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import { Router, Routes, Route } from 'react-router-dom'
import Details from './components/pages/Details'
import Search from './components/pages/Search'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>

    </>
  )
}

export default App
