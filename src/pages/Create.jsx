import { db } from '../utils/conexionBD'
import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Header from '../utils/Header'
const mySwal = withReactContent (Swal)

const Create = () => {

  const [ciudad, setCiudad] = useState('')
  const [nombre, setNombre] =useState('')
  const [apellido, setApellido] = useState('')
  const [fecha, setFecha] = useState('')
  const navigate = useNavigate()

  const futbolistasCollection = collection(db, "Futbolistas")



  const guardar = async (e) =>{
    e.preventDefault()
    if(nombre == '' || apellido == '' || ciudad == '' || fecha == ''){
      mySwal.fire({
        title: "Hubo un error",
        text: "Todos los campos tienen que estar completados",
        icon: "error"
      });
    }else{
      await addDoc(futbolistasCollection, {Ciudad: ciudad, Nombre: nombre, Apellido: apellido, Fecha: fecha})
      navigate("/payfb/database")
    }

  }

  return (
    <>
      <Header/>
      <h2 className='font-extrabold text-4xl text-center p-4'>Crear</h2>

      <form className='mt-5' onSubmit={guardar}>
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

export default Create
