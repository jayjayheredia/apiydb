import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {db} from "../utils/conexionBD.js"
import {collection, getDocs, deleteDoc, doc} from "firebase/firestore"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Header from '../utils/Header.jsx'

const mySwal = withReactContent (Swal)


const Database = () => {

  const [futbolistas, setFutbolistas] = useState([]);

  const futbolistasCollection = collection(db, "Futbolistas")





  const deleteFutbolista = async(id) =>{
    const futbolistaDoc = doc(db, "Futbolistas", id)
    await deleteDoc(futbolistaDoc)
  }

  const confirmDelete = (id) =>{
    mySwal.fire({
      title: "Estas Seguro?",
      text: "Esto no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borralo"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFutbolista(id)
        mySwal.fire({
          title: "Eliminado!",
          text: "Tu futbolista fue eliminado.",
          icon: "success"
        });
      }
    });
  }


  useEffect(()=>{
    const getFutbolistas = async() =>{
      const data = await getDocs(futbolistasCollection)
      setFutbolistas(
        data.docs.map((doc)=>({
          ...doc.data(), id:doc.id
        }))
      )
    }
    getFutbolistas()
  },[futbolistas])



  return (
    <>
      <Header />
      <h2 className='font-extrabold text-4xl text-center p-4'>Databases</h2>


      <Link to="/payfb/create"><h2 className='font-extrabold text-2xl text-center p-4'>Agregar otro futbolista</h2></Link>

      <div>
        <table className='table-auto text-center m-auto mt-10'>
          <thead>
            <tr className=''>
              <th className='border border-black p-2'>Nombre</th>
              <th className='border border-black p-2'>Apellido</th>
              <th className='border border-black p-2'>Fecha de Nacimiento</th>
              <th className='border border-black p-2'>Ciudad de Nacimiento</th>
              <th className='border border-black p-2'>Editar</th>
              <th className='border border-black p-2'>Eliminar</th>
            </tr>
          </thead>

          <tbody>
            {futbolistas.map((futbolista)=>(
            <tr key={futbolista.id}>
              <td className='border border-black p-2'>{futbolista.Nombre}</td>
              <td className='border border-black p-2'>{futbolista.Apellido}</td>
              <td className='border border-black p-2'>{futbolista.Fecha}</td>
              <td className='border border-black p-2'>{futbolista.Ciudad}</td>
              <td className='border border-black p-2'><Link to={`edit/${futbolista.id}`}><i class="fa-regular fa-pen-to-square"></i></Link></td>
              <td className='border border-black p-2'><button onClick={()=>{confirmDelete(futbolista.id)}}><i class="fa-solid fa-trash"></i></button></td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Database
