import React from 'react'
import { useFetch } from '../utils/conexionAPI'
import { Link } from 'react-router-dom'
import Header from '../utils/Header'

const Estudiantes = () => {

  const {data, loading} = useFetch("https://hp-api.onrender.com/api/characters/students")

  return (
    <>

    <Header/>
     <h3 className='font-extrabold text-4xl text-center p-4'>Students</h3>
     <div className='grid grid-cols-4 p-5 place-items-center'>
        {loading && <li className='list-none m-6 text-2xl bg-gray-500 mb-4 ml-4 p-2 text-cyan-300 text-center rounded-xl'>Loading...</li>}
        {data?.map((user) => (<li className='list-none w-3/4 h-1/8 bg-gray-500 mb-4 ml-4 p-2 text-cyan-300 text-center rounded-xl' key={user.id}>
          Name: {user.name} <br />
          Gender: {user.gender} <br />
          House: {user.house} <br />
          Date of Birth: {user.dateOfBirth} <br />
          Patronus: {user.patronus} <br />
          <img className='w-3/5 h-2/5 place-items-center m-auto text-cyan-300 rounded-xl mt-4' src={user.image} alt="Image Not Found" />
         </li>))}
      </div>
    </>
  )
}

export default Estudiantes