import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { db } from "../utils/conexionBD.js"
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Header from '../utils/Header.jsx'

const mySwal = withReactContent(Swal)

const Database = () => {
  const [futbolistas, setFutbolistas] = useState([]);
  const futbolistasCollection = collection(db, "Futbolistas")

  const deleteFutbolista = async (id) => {
    const futbolistaDoc = doc(db, "Futbolistas", id)
    await deleteDoc(futbolistaDoc)
  }

  const confirmDelete = (id) => {
    mySwal.fire({
      title: "¿Estás Seguro?",
      text: "Esto no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, bórralo"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFutbolista(id)
        mySwal.fire({
          title: "¡Eliminado!",
          text: "El futbolista fue eliminado correctamente.",
          icon: "success"
        });
      }
    });
  }

  useEffect(() => {
    const getFutbolistas = async () => {
      const data = await getDocs(futbolistasCollection)
      setFutbolistas(
        data.docs.map((doc) => ({
          ...doc.data(), id: doc.id
        }))
      )
    }
    getFutbolistas()
  }, [futbolistas])

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto mt-10 p-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Plantel de Futbolistas</h2>
          <Link to="/create" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-100 flex items-center gap-2">
            <span>+</span> Agregar Jugador
          </Link>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-4 font-bold text-slate-600 uppercase text-xs tracking-wider">Nombre Completo</th>
                  <th className="p-4 font-bold text-slate-600 uppercase text-xs tracking-wider">Ciudad de Nacimiento</th>
                  {/* Nueva Columna de Fecha */}
                  <th className="p-4 font-bold text-slate-600 uppercase text-xs tracking-wider">Fecha de Nacimiento</th>
                  <th className="p-4 font-bold text-slate-600 uppercase text-xs tracking-wider text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {futbolistas.map((f) => (
                  <tr key={f.id} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="p-4">
                      <div className="text-slate-900 font-semibold">{f.Nombre} {f.Apellido}</div>
                    </td>
                    <td className="p-4 text-slate-500 font-medium">
                      {f.Ciudad}
                    </td>
                    {/* Renderizado de la Fecha con estilo */}
                    <td className="p-4 text-slate-500 italic text-sm">
                      <span className="flex items-center gap-2">
                        <i className="fa-regular fa-calendar text-slate-400"></i>
                        {f.Fecha}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center gap-3">
                        <Link 
                          title="Editar" 
                          to={`edit/${f.id}`} 
                          className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white w-9 h-9 flex items-center justify-center rounded-lg transition-all"
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                        </Link>
                        <button 
                          title="Eliminar" 
                          onClick={() => confirmDelete(f.id)} 
                          className="bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white w-9 h-9 flex items-center justify-center rounded-lg transition-all"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {futbolistas.length === 0 && (
            <div className="p-10 text-center text-slate-400 italic">
              No hay futbolistas registrados en la base de datos.
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Database