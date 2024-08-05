import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/img1.jpg'

const Home = () => {

  document.title = "NimbusBook - Home"

  return (
    <div className=' pt-[5rem]'>
      <main className=" bg-white h-screen">
        <div className="bg-white flex items-center overflow-hidden">
          <div className="container mx-auto px-6 flex justify-evenly relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative">
              <span className="w-20 h-2 bg-zinc-800 mb-12">
              </span>
              <h1 className="text-6xl sm:text-6xl font-bold flex flex-col leading-none text-zinc-800">
                Organize
                <span className="text-5xl sm:text-4xl">
                  Your Thoughts
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-zinc-600 mt-6">
                NimbusBook is your ultimate notes-making app, crafted to make note-taking simple, organized, and accessible. Whether you're capturing ideas, tracking tasks, or planning projects, NimbusBook helps you stay on top of everything.
                <br /><br />
                Join NimbusBook today and streamline your note-taking process. Sign up now and organize your life, one note at a time!
              </p>
              <div className="flex mt-8">
                <Link to="/notes" className="py-2 px-4 rounded-lg bg-indigo-500 border-indigo-500 border-2 text-white text-md mr-4 hover:bg-indigo-700 transition-all duration-300 ease-in-out">
                  Get started
                </Link>
                <Link to='/login' className="py-2 px-4 rounded-lg bg-transparent border-2 border-indigo-500 text-indigo-500 text-md transition-all duration-300 ease-in-out">
                  Login
                </Link>
              </div>
            </div>
            <div className="hidden sm:block relative">
              <img src={img1} className="max-w-xs md:max-w-[24rem]" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
