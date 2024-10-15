import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import GetUsers from './pages/getuser'
import AddUsers from './pages/adduser'
import Update from './pages/update.jsx'
import "./style.css"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<GetUsers/>}/>
           <Route path="/add" element={<AddUsers/>}/>
           <Route path='/edit/:id' element={<Update/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
