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
          <Route path="/payfb" element={<Home/>} />
          <Route path="/payfb/avocado" element={<Avocado/>} />
          <Route path="/payfb/chuck" element={<Chuck/>}/>
          <Route path="/payfb/hp" element={<HP/>} />
          <Route path="/payfb/database" element={<Database/>}/>
          <Route path="/payfb/database/edit/:id" element={<Edit/>}/>
          <Route path="/payfb/create" element={<Create/>}/>
        </Routes>
        
        
        
        </BrowserRouter>
      </>

)
