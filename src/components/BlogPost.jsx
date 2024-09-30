/**
 * @file BlogPost.jsx
 * @description Componente para mostrar un blog específico basado en su slug.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente se encarga de recuperar y mostrar el contenido de un blog individual de Firebase, utilizando el slug para identificar el blog específico.
 */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogPost = () => {
  // Extrae el slug de los parámetros de la URL
  const { slug } = useParams();
  // Estado para almacenar los datos del blog
  const [blog, setBlog] = useState(null);

  // Hook que se ejecuta al montar el componente o cambiar el slug
  useEffect(() => {
    /**
     * Función asíncrona para obtener el blog específico de Firebase.
     * @returns {Promise<void>} No retorna ningún valor, actualiza el estado de blog.
     */
    const fetchBlog = async () => {
      const querySnapshot = await getDocs(collection(db, 'blog'));
      // Busca el blog que coincida con el slug
      const foundBlog = querySnapshot.docs.find((doc) => doc.data().slug === slug);

      if (foundBlog) {
        setBlog(foundBlog.data()); // Actualiza el estado con los datos del blog encontrado
      } else {
        console.log('No such document!'); // Manejo de error si no se encuentra el blog
      }
    };

    fetchBlog(); // Llama a la función para obtener el blog
  }, [slug]); // Dependencia: se ejecuta cuando cambia el slug

  // Muestra un mensaje de carga mientras se obtienen los datos del blog
  if (!blog) return <div className='text-white text-center'>Cargando...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="w-full h-36 text-center bg-gradient-to-b from-[#174839] to-[#44A385] md:pt-10 pt-3">
        <h1 className="text-2xl md:text-3xl font-bold mt-5 text-white text-center mb-4">{blog.titulo}</h1>
      </div>
      <div className="flex-grow max-w-4xl mx-auto rounded-lg shadow-lg p-6">
        <img src={blog.imagen} alt={blog.titulo} className="w-full h-64 md:h-80 lg:h-[500px] object-cover rounded-lg mb-6" />
        <div className="text-gray-400 text-lg leading-relaxed">
          {blog.contenidoCompleto.split('\n').map((paragraph, idx) => (
            <p key={idx} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
