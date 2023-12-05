import React from 'react'
// import X from 'lucide-react/X'

const Navbar = () => {
  return (
    <div className='w-full justify-between py-6 sticky flex px-12'>
        <div className="nav-brand text-4xl font-bold mx-5">
            Fikri.dev
        </div>
        <div className="nav-links flex flex-row my-auto h-full">
            <a href="#" className="nav-link mx-5 font-semibold hover:text-primary hover:cursor-pointer p-3">
                Home
            </a>
            <a href="#" className="nav-link mx-5 font-semibold hover:text-primary hover:cursor-pointer p-3">
                Skills
            </a>
            <a href="#" className="nav-link mx-5 font-semibold hover:text-primary hover:cursor-pointer p-3">
                Projects
            </a>
            <a href="#" className="nav-link mx-5 font-semibold hover:text-primary hover:cursor-pointer border-2 border-white rounded-full p-3">
                Get In Touch
            </a>
        </div>
    </div>
  )
}

export default Navbar