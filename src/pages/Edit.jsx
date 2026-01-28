import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../utils/conexionBD'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const mySwal = withReactContent (Swal)
import Header from '../utils/Header'
const Edit = () => {

  const [ciudad, setCiudad] = useState('')
  const [nombre, setNombre] =useState('')
  const [apellido, setApellido] = useState('')
  const [fecha, setFecha] = useState('')
  const navigate = useNavigate()
  const {id} = useParams()

  const update = async (e) => {
    e.preventDefault()
    const futbolista = doc(db, "Futbolistas", id)
    const data = {Ciudad: ciudad, Nombre: nombre, Apellido: apellido, Fecha: fecha}
    if(nombre == '' || apellido == '' || ciudad == '' || fecha == ''){
      mySwal.fire({
        title: "Hubo un error",
        text: "Todos los campos tienen que estar completados",
        icon: "error"
      });
    }else{
      await updateDoc(futbolista, data)
      navigate('/payfb/database')
    }
  }

  const getFutbolistaById = async (id) =>{
     const futbolista = await getDoc(doc(db, "Futbolistas", id))
     if(futbolista.exists()) {
      setNombre(futbolista.data().Nombre)
      setApellido(futbolista.data().Apellido)
      setFecha(futbolista.data().Fecha)
      setCiudad(futbolista.data().Ciudad)
     }else{
      console.log("El futbolista no existe")
     }
  }

  useEffect( () =>{
    getFutbolistaById(id)
  }, [])
    
  return (
    <>
      <Header/>
      <h2 className='font-extrabold text-4xl text-center p-4'>Editar</h2>


      <form onSubmit={update}>
      <div className='mb-3 text-center'>
            <label className='text-xl font-bold'>Nombre</label>
            <input className='ml-3 text-xl' type="text"
              value={nombre}
              onChange={(e) => {setNombre(e.target.value)}}
            />
          </div>
          <div className='mb-3 text-center'>
            <label className='text-xl font-bold'>Apellido</label>
            <input className='ml-3 text-xl' type="text"
              value={apellido}
              onChange={(e) => {setApellido(e.target.value)}}
            />
          </div>
          <div className='mb-3 text-center'>
            <label className='text-xl font-bold'>Ciudad de Nacimiento</label>
            <input className='ml-3 text-xl' type="text"
              value={ciudad}
              onChange={(e) => {setCiudad(e.target.value)}}
            />
          </div>
          <div className='mb-3 text-center'>
            <label className='text-xl font-bold'>Fecha de Nacimiento</label>
            <input className='ml-3 text-xl' type="text"
              value={fecha}
              onChange={(e) => {setFecha(e.target.value)}}
            />
          </div>

          <div className='text-center'>
          <button className='text-2xl font-bold mt-8 border border-black rounded-md p-3 hover:bg-slate-400' type='submit'>Guardar</button>
          </div>
      </form>

    </>
  )
}

export default Edit
