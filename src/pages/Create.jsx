import { db } from '../utils/conexionBD'
import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Header from '../utils/Header'
const mySwal = withReactContent(Swal)

const Create = () => {
  const [ciudad, setCiudad] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [fecha, setFecha] = useState('')
  const navigate = useNavigate()

  const futbolistasCollection = collection(db, "Futbolistas")

  const guardar = async (e) => {
    e.preventDefault()
    if (nombre === '' || apellido === '' || ciudad === '' || fecha === '') {
      mySwal.fire({
        title: "Campos incompletos",
        text: "Por favor, completa todos los datos del futbolista",
        icon: "warning",
        confirmButtonColor: "#4F46E5"
      });
    } else {
      await addDoc(futbolistasCollection, { Ciudad: ciudad, Nombre: nombre, Apellido: apellido, Fecha: fecha })
      navigate("/database")
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="max-w-xl mx-auto mt-12 p-4">
        <div className="bg-white shadow-2xl rounded-3xl p-8 border border-slate-100">
          <h2 className="font-black text-3xl text-slate-800 text-center mb-8 uppercase tracking-wider">
            Nuevo Jugador
          </h2>

          <form onSubmit={guardar} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Nombre</label>
                <input
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
                  type="text"
                  placeholder="Ej: Lionel"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Apellido</label>
                <input
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
                  type="text"
                  placeholder="Ej: Messi"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Ciudad de Nacimiento</label>
              <input
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
                type="text"
                placeholder="Ej: Rosario"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Fecha de Nacimiento</label>
              <input
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
                type="text"
                placeholder="DD/MM/AAAA"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>

            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-200 transition-all active:scale-95 mt-4"
              type="submit"
            >
              Registrar Futbolista
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create