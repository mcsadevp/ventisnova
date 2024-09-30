/**
 * @file BlogList.jsx
 * @description Componente para mostrar una lista de blogs con paginación y animaciones.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente se encarga de recuperar los blogs de Firebase y mostrarlos en una lista paginada. Utiliza animaciones para mejorar la experiencia visual al cargar y mostrar cada blog.
 */

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { motion } from 'framer-motion';

const BlogList = () => {
  // Estado para almacenar los blogs obtenidos
  const [blogs, setBlogs] = useState([]);
  // Estado para controlar la página actual de los blogs
  const [currentPage, setCurrentPage] = useState(1);
  // Número de blogs a mostrar por página
  const blogsPerPage = 3;

  // Hook que se ejecuta al montar el componente para obtener los blogs de Firebase
  useEffect(() => {
    /**
     * Función asíncrona para obtener blogs de Firebase.
     * @returns {Promise<void>} No retorna ningún valor, actualiza el estado de blogs.
     */
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, 'blog'));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(data); // Actualiza el estado con los blogs obtenidos
    };

    fetchBlogs(); // Llama a la función para obtener blogs
  }, []);

  // Calcula los índices para la paginación
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog); // Obtiene los blogs actuales según la página

  /**
   * Función para cambiar la página actual.
   * @param {number} pageNumber - Número de la página a la que se desea cambiar.
   * @returns {void} No retorna ningún valor, actualiza el estado de la página actual.
   */
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {currentBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="rounded-lg overflow-hidden border border-white"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <motion.div className="md:w-1/2 h-full">
                <img src={blog.imagen} alt={blog.titulo} className="w-full h-full object-cover" />
              </motion.div>
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">{blog.titulo}</h2>
                  <p className="text-gray-400 mb-4 line-clamp-3">{blog.resumen}</p>
                </div>
                <button onClick={() => (window.location.href = `/noticiaView/${blog.slug}`)} className="bg-customGreen text-white py-2 px-4 rounded hover:bg-teal-800 transition duration-300 w-[295px] md:w-[250px]">
                  Ver artículo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="flex justify-center mt-6">
          {[...Array(Math.ceil(blogs.length / blogsPerPage))].map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)} className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-customGreen text-white' : 'bg-gray-300 text-gray-700'}`}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
