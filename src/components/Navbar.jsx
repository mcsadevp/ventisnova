import React, { useState, useEffect } from 'react';
import { IoClose, IoMenu, IoPersonOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { useAuth } from '../context/AuthContext'; // Importa el hook de autenticación

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const { user } = useAuth(); // Obtén el usuario del contexto

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Si el usuario está desplazándose hacia abajo
        setShowNavbar(false);
      } else {
        // Si el usuario está desplazándose hacia arriba
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-customDarkGreen fixed top-0 w-full z-20 text-white transition-transform duration-500 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div className="md:mx-16 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo y enlaces */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <NavLink to={`/`}><img src={logo} className='w-[200px] h-[20px]' alt="Logo VentisNova" /></NavLink>
          {/* Enlaces de navegación para pantallas medianas y grandes */}
          <div className="hidden md:flex md:items-center md:pl-10">
          <NavLink to={`/`} className={({ isActive }) => isActive ? "px-2 rounded-md transition-all text-customLightGreen" : "px-2 text-white rounded-md transition-all hover:text-customLightGreen"}>
            Inicio
            </NavLink>
            <p className='px-2 py-2 text-white'>|</p>
            <NavLink to={`/mentorias-y-tutorias`} className={({ isActive }) => isActive ? "px-2 rounded-md transition-all text-customLightGreen" : "px-2 text-white rounded-md transition-all hover:text-customLightGreen"}>
              Cursos
            </NavLink>
            <p className='px-2 py-2 text-white'>|</p>
            <NavLink to={`/BlogView`} className={({ isActive }) => isActive ? "px-2 rounded-md transition-all text-customGreen" : "px-2 text-white rounded-md transition-all hover:text-customLightGreen"}>
              Blog
            </NavLink>
            <p className='px-2 py-2 text-white'>|</p>
            <NavLink to={`/Contact`} className={({ isActive }) => isActive ? "px-2 rounded-md transition-all text-customGreen" : "px-2 text-white rounded-md transition-all hover:text-customLightGreen"}>
              Contacto
            </NavLink>
          </div>
        </div>

        {/* Iconos y botón de menú para móviles */}
        <div className="flex items-center space-x-8">
          {/* Iconos */}
          <NavLink to={user ? '/dashboard' : '/perfil'} className='md:block hidden'> {/* Ruta dinámica */}
            <IoPersonOutline className="h-6 w-6 text-white" />
          </NavLink>

          {/* Botón del menú para móviles */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            {isOpen ? <IoClose className="h-6 w-6 text-white" /> : <IoMenu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 opacity-100' : ' max-h-0 opacity-0'} md:hidden bg-black/25`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
        <NavLink to={'/'} className={({ isActive }) => isActive ? "block px-3 py-2 rounded-md text-base text-customGreen" : "block px-3 py-2 rounded-md text-base text-white hover:text-customLightGreen"}>
            Inicio
          </NavLink>
          <NavLink to={'/mentorias-y-tutorias'} className={({ isActive }) => isActive ? "block px-3 py-2 rounded-md text-base text-customGreen" : "block px-3 py-2 rounded-md text-base text-white hover:text-customLightGreen"}>
            Cursos
          </NavLink>
          <NavLink to={`/blogView`} className={({ isActive }) => isActive ? "block px-3 py-2 rounded-md text-base text-customGreen" : "block px-3 py-2 rounded-md text-base text-white hover:text-customLightGreen"}>
            Blog
          </NavLink>
          <NavLink to={`/contact`} className={({ isActive }) => isActive ? "block px-3 py-2 rounded-md text-base text-customGreen" : "block px-3 py-2 rounded-md text-base text-white hover:text-customLightGreen"}>
            Contacto
          </NavLink>
          <NavLink to={user ? '/dashboard' : '/perfil'} className='flex px-5'>
            <IoPersonOutline className="h-6 w-6 text-white" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;