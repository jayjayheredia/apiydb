import React from 'react'
import { useFetch } from '../utils/conexionAPI'
import Header from '../utils/Header'
const Avocado = () => {

    const {data, loading} = useFetch("https://platzi-avo.vercel.app/api/avo")

    console.log(data)    

    const imgURL = `https://platzi-avo.vercel.app`

  return (
    <>
      <Header/>
     <h3 className='font-extrabold text-4xl text-center p-4'>Avocado</h3>
     <div  className='grid grid-cols-3 p-5 place-items-center'>
        {loading && <li className='list-none m-6 text-2xl bg-gray-500 mb-4 ml-4 p-2 text-cyan-300 text-center rounded-xl'>Loading...</li>}
        {data?.data.map((user) => (<li className=' list-none w-3/4 h-1/8 bg-gray-500 mb-4 ml-4 p-2 text-cyan-300 text-center rounded-xl'  key={user.id}>
          Name: {user.name} <br />
          <img className='w-3/5 h-2/5 place-items-center m-auto text-cyan-300 rounded-xl mt-4' src={imgURL+user.image} alt="Image Not Found" /><br />
          Price: ${user.price} <br />
          Attributes: {user.attributes.description} <br />
          Hardiness: {user.attributes.hardiness} <br />
          Shape: {user.attributes.shape} <br />
          Taste: {user.attributes.taste}
         </li>))}
      </div>
    </>
  )
}

export default Avocado
