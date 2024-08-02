import React from 'react'
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Features from './components/Features';
import Contact from './components/Contact'
import { useAuth } from './storage/Auth'
import Notes from './components/Notes'

const App = () => {

  const { isLoggedIn } = useAuth();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/notes" element={isLoggedIn ? <Notes /> : <Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
