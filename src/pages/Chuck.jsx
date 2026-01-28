import React from 'react'
import { useFetch } from '../utils/conexionAPI'

import Header
 from '../utils/Header'
const Chuck = () => {

    const {data, loading} = useFetch("https://api.chucknorris.io/jokes/random")

  return (
    <>
        <Header/>
        <h3 className='font-extrabold text-4xl text-center p-4'>Random Chuck Norris Joke</h3>
        {loading && <li className='list-none m-6 text-2xl bg-gray-500 mb-4 ml-4 p-2 text-cyan-300 text-center rounded-xl'>Loading...</li>}
        {data && <li className='list-none m-6 text-2xl bg-gray-500 mb-4 ml-4 p-2 text-cyan-300 text-center rounded-xl' >{data.value}</li>}
      
    </>
  )
}

export default Chuck
