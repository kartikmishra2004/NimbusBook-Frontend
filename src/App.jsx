import React from 'react'
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
