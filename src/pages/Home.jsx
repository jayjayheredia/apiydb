import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1 className='font-extrabold text-6xl text-center p-4'>Home</h1>


      <div className='grid-cols-4 grid p-4 place-items-center mt-20'>
        <Link to="/payfb/hp">
          <button className='text-2xl rounded-lg bg-gray-500 p-5 text-cyan-200'>Harry Potter Characters</button>
        </Link>

        <Link to="/payfb/chuck">
          <button className='text-2xl rounded-lg bg-gray-500 p-5 text-cyan-200'>Chuck Norris Joke</button>
        </Link>

        <Link to="/payfb/avocado">
          <button className='text-2xl rounded-lg bg-gray-500 p-5 text-cyan-200'>Types of Avocado</button>
        </Link>

        <Link to="/payfb/database">
          <button className='text-2xl rounded-lg bg-gray-500 p-5 text-cyan-200'>Database</button>
        </Link>
      </div>
    </>
  )
}

export default Home


// mansory   para que acomode las fotos y responsive