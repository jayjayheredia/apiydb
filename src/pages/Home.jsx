import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const menus = [
    { to: "/apiydb/hp", label: "Harry Potter", icon: "⚡", color: "hover:border-purple-500" },
    { to: "/apiydb/chuck", label: "Chuck Jokes", icon: "🤠", color: "hover:border-orange-500" },
    { to: "/apiydb/avocado", label: "Avocado Store", icon: "🥑", color: "hover:border-green-500" },
    { to: "/apiydb/database", label: "Firebase DB", icon: "⚽", color: "hover:border-blue-500" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      <h1 className="mt-20 font-black text-6xl text-slate-800 tracking-tight">
        My<span className="text-indigo-600">App</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10 max-w-6xl w-full">
        {menus.map((item) => (
          <Link key={item.to} to={item.to} className={`bg-white p-8 rounded-3xl shadow-sm border-2 border-transparent ${item.color} transition-all duration-300 transform hover:-translate-y-2 text-center`}>
            <span className="text-5xl block mb-4">{item.icon}</span>
            <span className="text-xl font-bold text-slate-700">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home


// mansory   para que acomode las fotos y responsive