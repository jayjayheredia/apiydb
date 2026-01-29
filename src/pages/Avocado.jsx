import React from 'react'
import { useFetch } from '../utils/conexionAPI'
import Header from '../utils/Header'
const Avocado = () => {

    const {data, loading} = useFetch("https://platzi-avo.vercel.app/api/avo")

    console.log(data)    

    const imgURL = `https://platzi-avo.vercel.app`

  return (
    <div className="min-h-screen bg-gray-50">
          <Header />
          <h3 className="font-extrabold text-4xl text-center text-slate-800 p-8">Avocado Menu</h3>
          
          {loading && <div className="text-center py-10 text-xl font-medium animate-pulse">Cargando delicias...</div>}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
            {data?.data.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100">
                <img className="w-full h-64 object-cover" src={imgURL + item.image} alt={item.name} />
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">{item.name}</h4>
                  <p className="text-emerald-600 font-bold text-xl mb-4">${item.price}</p>
                  <div className="text-slate-600 text-sm space-y-1 italic">
                    <p><strong>Taste:</strong> {item.attributes.taste}</p>
                    <p><strong>Shape:</strong> {item.attributes.shape}</p>
                  </div>
                  <p className="mt-4 text-slate-500 text-sm line-clamp-3">{item.attributes.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Avocado
