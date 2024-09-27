import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { animate, motion } from 'framer-motion';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, 'blog'));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {currentBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="rounded-lg overflow-hidden border border-white"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Mueve hacia la izquierda o derecha dependiendo del índice
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }} // Ajusta la duración y tipo de animación
          >
            <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Imagen */}
              <motion.div className="md:w-1/2 h-full">
                <img src={blog.imagen} alt={blog.titulo} className="w-full h-full object-cover" />
              </motion.div>
              {/* Contenido */}
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
