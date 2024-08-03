import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import { useAuth } from './storage/Auth.jsx'
import Notes from './components/Notes'

const App = () => {

  const { isLoggedIn } = useAuth();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/notes" element={isLoggedIn ? <Notes /> : <Login />} />
        <Route exact path="/signup" element={isLoggedIn ? <Home /> : <Signup />} />
        <Route exact path="/login" element={isLoggedIn ? <Home /> : <Login />} />
        <Route exact path="/logout" element={isLoggedIn ? <Logout /> : <Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
