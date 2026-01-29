import React from 'react'
import { useFetch } from '../utils/conexionAPI'

import Header
 from '../utils/Header'
const Chuck = () => {

    const {data, loading} = useFetch("https://api.chucknorris.io/jokes/random")

return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <div className="flex flex-col items-center justify-center mt-20 p-6">
        <h3 className="text-amber-400 font-black text-5xl mb-10 tracking-tighter italic">CHUCK FACTS</h3>
        {loading ? (
           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-amber-400"></div>
        ) : (
          <div className="max-w-2xl bg-slate-800 p-10 rounded-3xl border-l-8 border-amber-400 shadow-2xl">
            <p className="text-2xl leading-relaxed font-medium">"{data?.value}"</p>
          </div>
        )}
        <button onClick={() => window.location.reload()} className="mt-10 bg-amber-500 hover:bg-amber-600 px-8 py-3 rounded-full font-bold transition-all">
          Another one!
        </button>
      </div>
    </div>
  );
};

export default Chuck
