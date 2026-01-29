import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../utils/conexionBD'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Header from '../utils/Header'
const mySwal = withReactContent(Swal)

const Edit = () => {
  const [ciudad, setCiudad] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [fecha, setFecha] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  const update = async (e) => {
    e.preventDefault()
    const futbolista = doc(db, "Futbolistas", id)
    const data = { Ciudad: ciudad, Nombre: nombre, Apellido: apellido, Fecha: fecha }
    
    if (nombre === '' || apellido === '' || ciudad === '' || fecha === '') {
      mySwal.fire({
        title: "Error de edición",
        text: "No puedes dejar campos vacíos",
        icon: "error"
      });
    } else {
      await updateDoc(futbolista, data)
      mySwal.fire({
        title: "¡Actualizado!",
        text: "Los datos se guardaron correctamente",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      })
      navigate('/payfb/database')
    }
  }

  const getFutbolistaById = async (id) => {
    const futbolista = await getDoc(doc(db, "Futbolistas", id))
    if (futbolista.exists()) {
      setNombre(futbolista.data().Nombre)
      setApellido(futbolista.data().Apellido)
      setFecha(futbolista.data().Fecha)
      setCiudad(futbolista.data().Ciudad)
    }
  }

  useEffect(() => {
    getFutbolistaById(id)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="max-w-xl mx-auto mt-12 p-4">
        <div className="bg-white shadow-2xl rounded-3xl p-8 border border-slate-100">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-3xl">📝</span>
            <h2 className="font-black text-3xl text-slate-800 uppercase tracking-wider">
              Editar Datos
            </h2>
          </div>

          <form onSubmit={update} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-500 mb-1 ml-1 uppercase">Nombre</label>
              <input
                className="w-full border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-colors font-medium text-slate-700"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-500 mb-1 ml-1 uppercase">Apellido</label>
              <input
                className="w-full border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-colors font-medium text-slate-700"
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                <label className="block text-sm font-bold text-slate-500 mb-1 ml-1 uppercase">Ciudad</label>
                <input
                  className="w-full border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-colors font-medium text-slate-700"
                  type="text"
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-500 mb-1 ml-1 uppercase">Nacimiento</label>
                <input
                  className="w-full border-2 border-slate-100 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-colors font-medium text-slate-700"
                  type="text"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => navigate('/payfb/database')}
                type="button"
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-4 rounded-2xl transition-all"
              >
                Cancelar
              </button>
              <button
                className="flex-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-indigo-100 transition-all"
                type="submit"
              >
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit