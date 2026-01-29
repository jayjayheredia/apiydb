import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Chuck from "./pages/Chuck"
import Avocado from "./pages/Avocado"
import HP from "./pages/HP"
import Home from "./pages/Home"
import Database from "./pages/Database"
import Create from "./pages/Create"
import Edit from "./pages/Edit"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
      <>
        <BrowserRouter>
        
        <Routes>
          <Route path="/apiydb" element={<Home/>} />
          <Route path="/apiydb/avocado" element={<Avocado/>} />
          <Route path="/apiydb/chuck" element={<Chuck/>}/>
          <Route path="/apiydb/hp" element={<HP/>} />
          <Route path="/apiydb/database" element={<Database/>}/>
          <Route path="/apiydb/database/edit/:id" element={<Edit/>}/>
          <Route path="/apiydb/create" element={<Create/>}/>
        </Routes>
        
        
        
        </BrowserRouter>
      </>

)
