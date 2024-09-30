/**
 * @file NoticiaView.jsx
 * @description Componente que muestra la vista de una noticia específica en el blog.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente incluye la navegación hacia atrás y el contenido del blog.
 */

import BlogPost from "../components/BlogPost";
import Navbar from "../components/Navbar";
import { IoMdArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

/**
 * NoticiaView - Componente principal que muestra el contenido de una noticia.
 * @returns {JSX.Element} - Renderiza la vista de la noticia con navegación y contenido.
 */
const NoticiaView = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="mt-20">
        <Navbar />  {/* Barra de navegación */}
      </div>
      {/* Icono de flecha hacia atrás */}
      <div className="absolute top-20 left-4 md:top-28 md:ml-8 z-50">
        <NavLink to="/blogView">
          {/* Tamaño de la flecha ajustado según el tamaño de la pantalla */}
          <IoMdArrowBack
            size={20}  
            className="text-white cursor-pointer hover:text-gray-200 md:size-30"  
          />
          {/* Oculta el texto "Volver" en móviles y lo muestra en pantallas medianas */}
          <p className="hidden md:block text-white font-thin cursor-pointer hover:text-gray-200">Volver</p>
        </NavLink>
      </div>
      <BlogPost />  {/* Componente que muestra el contenido del blog */}
    </div>
  );
}

export default NoticiaView;
