import React from 'react'
import { useFetch } from '../utils/conexionAPI'
import Header from '../utils/Header'

const Estudiantes = () => {
  // 1. Obtenemos los datos de la API
  const { data, loading } = useFetch("https://hp-api.onrender.com/api/characters/students")

  // 2. Creamos una constante para los primeros 20 estudiantes
  // Usamos el operador ?. para evitar errores si 'data' aún es null
  const primerosEstudiantes = data?.slice(0, 20);

  const getHouseColor = (house) => {
    switch (house) {
      case 'Gryffindor': return 'border-red-600 text-red-700 bg-red-50';
      case 'Slytherin': return 'border-emerald-600 text-emerald-700 bg-emerald-50';
      case 'Hufflepuff': return 'border-amber-500 text-amber-700 bg-amber-50';
      case 'Ravenclaw': return 'border-blue-600 text-blue-700 bg-blue-50';
      default: return 'border-slate-300 text-slate-700 bg-slate-50';
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-10">
        <header className="text-center mb-12">
          <h3 className="font-black text-5xl text-slate-800 mb-2 font-serif">Hogwarts Students</h3>
          <p className="text-slate-500 italic">Top 20 Most Notable Wizards</p>
        </header>

        {loading && (
          <div className="flex justify-center items-center h-64 italic animate-pulse text-slate-500">
            Cargando el Gran Comedor...
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* 3. Mapeamos solo la constante recortada */}
          {primerosEstudiantes?.map((user) => (
            <div 
              key={user.id} 
              className={`bg-white rounded-3xl overflow-hidden shadow-lg border-b-8 transition-all duration-300 hover:scale-105 ${getHouseColor(user.house)}`}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  src={user.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07k4m48dFzP1v8X8tM1W8l5f6lXy_J6X9_A&s"} 
                  alt={user.name} 
                />
              </div>

              <div className="p-5">
                <h4 className="text-xl font-bold text-slate-800 leading-tight">{user.name}</h4>
                <p className="text-sm font-medium mb-3 opacity-80">{user.house || 'Muggle-born'}</p>
                
                <div className="text-xs space-y-1 text-slate-600 border-t pt-3">
                  <p><strong>Patronus:</strong> {user.patronus || 'None'}</p>
                  <p><strong>Gender:</strong> {user.gender}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Estudiantes