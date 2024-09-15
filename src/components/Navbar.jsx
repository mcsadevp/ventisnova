import React, { useState } from 'react'
import { IoSearchOutline, IoClose, IoMenu, IoPersonOutline } from "react-icons/io5"
import { NavLink } from 'react-router-dom';
import  logo  from '../assets/Logo.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-[linear-gradient(180deg,#1F332D_0%,rgba(30,87,70,0)_98.5%)] w-full z-10 text-white">
      <div className="md:mx-16 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo y enlaces */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <NavLink to={`/`}><img src={ logo } className='w-[200px] h-[20px]' alt="Logo VentisNova" /></NavLink>
          
          {/* Enlaces de navegación para pantallas medianas y grandes */}
          <div className="hidden md:flex md:items-center md:pl-10">
            <NavLink to={'/CursosView'} className="px-2 text-white rounded-md transition-all">Cursos</NavLink>
            <p className='px-2 py-2 text-white'>|</p>
            <NavLink to={`/BlogView`} className="px-2 text-white rounded-md transition-all">Blog</NavLink>
            <p className='px-2 py-2 text-white'>|</p>
            <NavLink to={`/ContactoView`} className="px-2 text-white rounded-md transition-all">Contacto</NavLink>
          </div>
        </div>

        {/* Iconos y botón de menú para móviles */}
        <div className="flex items-center space-x-8">
          {/* Iconos */}
          <NavLink to={`/buscar`}>
            <IoSearchOutline className="h-6 w-6 text-white" />
          </NavLink>
          <NavLink to={`/perfil`} className='md:block hidden'>
            <IoPersonOutline className="h-6 w-6 text-white" />
          </NavLink>

          {/* Botón del menú para móviles */}
          <button onClick={ toggleMenu } className="md:hidden focus:outline-none">
            {isOpen ? <IoClose className="h-6 w-6 text-white" /> : <IoMenu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 opacity-100' : ' max-h-0 opacity-0'} md:hidden bg-black/25`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink to={`/cursosView`} className="block px-3 py-2 text-white rounded-md text-base">Cursos</NavLink>
          <NavLink to={`/blogView`} className="block px-3 py-2 text-white rounded-md text-base">Blog</NavLink>
          <NavLink to={`/contactoView`} className="block px-3 py-2 text-white rounded-md text-base">Contacto</NavLink>
          <NavLink to={`/perfil`} className='flex px-5'>
            <IoPersonOutline className="h-6 w-6 text-white" />
          </NavLink>
        </div>
    </div>
  </nav>
  )
}

export default Navbar