/**
 * @file BlogView.jsx
 * @description Componente para la vista del blog que muestra una lista de artículos.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente incluye la barra de navegación, el título del blog, la lista de artículos y el pie de página.
 */

import BlogList from "../components/BlogList"; // Importa el componente que muestra la lista de artículos del blog
import Navbar from "../components/Navbar"; // Importa el componente de la barra de navegación
import Footer from "../components/Footer"; // Importa el componente del pie de página

/**
 * Componente principal para la vista del blog.
 * @returns {JSX.Element} La vista del blog con navegación, lista de artículos y pie de página.
 */
const BlogView = () => {
  return (
    <div className="min-h-screen flex flex-col"> {/* Contenedor principal que ocupa al menos toda la altura de la pantalla */}
      <Navbar /> {/* Componente de navegación superior */}
      <div className="w-full h-36 text-center bg-gradient-to-b from-[#174839] to-[#44A385] md:pt-10 pt-3">
        <h2 className="text-2xl font-semibold text-white leading-tight mt-20 md:text-center md:font-semibold md:text-3xl md:mt-12">
          Blog {/* Título del blog */}
        </h2>
      </div>
      <div className="flex-grow"> {/* Área que se expande para ocupar el espacio disponible */}
        <BlogList /> {/* Componente que renderiza la lista de artículos del blog */}
      </div>
      <Footer /> {/* Componente del pie de página */}
    </div>
  );
};

export default BlogView; // Exporta el componente para su uso en otras partes de la aplicación
