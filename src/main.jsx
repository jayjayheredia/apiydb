import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes, Navigate } from "react-router-dom"
import Chuck from "./pages/Chuck"
import Avocado from "./pages/Avocado"
import HP from "./pages/HP"
import Home from "./pages/Home"
import Database from "./pages/Database"
import Create from "./pages/Create"
import Edit from "./pages/Edit"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {/* La raíz es simplemente "/" */}
        <Route path="/" element={<Home />} />
        <Route path="/avocado" element={<Avocado />} />
        <Route path="/chuck" element={<Chuck />} />
        <Route path="/hp" element={<HP />} />
        <Route path="/database" element={<Database />} />
        <Route path="/database/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        
        {/* Por si alguien entra a una ruta vieja o inexistente, lo mandas al Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)