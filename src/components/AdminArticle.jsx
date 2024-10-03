/**
 * @file AdminArticle.jsx
 * @description Componente CRUD en la aplicación.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Permite realizar operaciones CRUD en los artículos.
 */

import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/firebaseConfig';
import Navbar from "./Navbar";
import { useAlert } from '../context/AlertContext';

const AdminArticle = () => {
  // Contexto de alerta para mostrar mensajes
  const { setAlert } = useAlert();
  
  // Variables de estado para manejar blogs, modos de edición, archivo de imagen y estado de carga
  const [blogs, setBlogs] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Ejecuta la función fetchBlogs al montar el componente para cargar los artículos
  useEffect(() => {
    fetchBlogs();
  }, []);

  /**
   * Obtiene la lista de blogs desde Firestore.
   * Actualiza el estado con los blogs obtenidos.
   */
  const fetchBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'blog'));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(data); // Actualiza el estado con los blogs obtenidos
    } catch (error) {
      setAlert('Error al cargar los artículos: ' + error.message);
    }
  };

  /**
   * Sube una imagen a Firebase Storage y retorna su URL.
   * @param {File} file - Archivo de imagen.
   * @returns {Promise<string|null>} URL de la imagen subida o null si no hay imagen.
   */
  const uploadImage = async (file) => {
    if (!file) return null;
    const storageRef = ref(storage, 'blog-images/' + file.name);
    await uploadBytes(storageRef, file); // Sube la imagen a Firebase Storage
    return await getDownloadURL(storageRef); // Retorna la URL de descarga de la imagen
  };

  /**
   * Maneja el envío del formulario para agregar o actualizar un blog.
   * @param {Event} event - Evento de envío del formulario.
   */
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    setLoading(true); // Muestra el estado de carga
    const form = event.target;

    try {
      let imageUrl = currentBlog?.imagen;
      if (imageFile) {
        imageUrl = await uploadImage(imageFile); // Sube la imagen si es seleccionada
      }

      // Datos del nuevo o actualizado artículo
      const newBlog = {
        autor: form.autor.value,
        categoria: form.categoria.value,
        contenidoCompleto: form.contenidoCompleto.value,
        fechaPublicacion: new Date().toISOString(),
        imagen: imageUrl,
        resumen: form.resumen.value,
        slug: form.slug.value,
        titulo: form.titulo.value
      };

      // Si estamos en modo edición, actualizamos el artículo, de lo contrario, lo creamos
      if (editMode) {
        await updateDoc(doc(db, 'blog', currentBlog.id), newBlog);
        setAlert('Artículo actualizado exitosamente!');
        setEditMode(false); // Sale del modo edición
      } else {
        await addDoc(collection(db, 'blog'), newBlog);
        setAlert('Artículo agregado exitosamente!');
      }

      // Reinicia el formulario y actualiza la lista de artículos
      form.reset();
      setImageFile(null);
      setCurrentBlog(null);
      fetchBlogs();
    } catch (error) {
      setAlert('Error: ' + error.message);
    } finally {
      setLoading(false); // Desactiva el estado de carga
    }
  };

  /**
   * Establece el blog actual en modo edición.
   * @param {Object} blog - Objeto del blog a editar.
   */
  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    setEditMode(true); // Activa el modo edición
    setImageFile(null); // Reinicia la selección de archivo
    window.scrollTo(0, 0);
  };

  /**
   * Elimina un artículo de Firestore.
   * @param {string} id - ID del artículo a eliminar.
   */
  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este artículo?')) {
      try {
        await deleteDoc(doc(db, 'blog', id)); // Elimina el artículo
        setAlert('Artículo eliminado exitosamente!');
        fetchBlogs(); // Actualiza la lista de artículos
      } catch (error) {
        setAlert('Error al eliminar el artículo: ' + error.message);
      }
    }
  };

  /**
   * Maneja el cambio de archivo para la imagen del artículo.
   * @param {Event} event - Evento de selección de archivo.
   */
  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]); // Establece el archivo seleccionado
  };

  // Renderiza el formulario y la lista de artículos
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-12">
        <h2 className="text-3xl font-semibold text-white mb-6">
          {editMode ? 'Editar Artículo' : 'Agregar Artículo'}
        </h2>
        <div className="bg-customFormGreen text-white rounded-lg shadow-lg p-6 mb-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="autor"
              placeholder="Autor *"
              className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
              required
              defaultValue={editMode ? currentBlog.autor : ''}
            />
            <input
              type="text"
              name="categoria"
              placeholder="Categoría *"
              className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
              required
              defaultValue={editMode ? currentBlog.categoria : ''}
            />
            <textarea
              name="contenidoCompleto"
              placeholder="Contenido Completo *"
              rows="4"
              className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
              required
              defaultValue={editMode ? currentBlog.contenidoCompleto : ''}
            ></textarea>
            <input
              type="text"
              name="resumen"
              placeholder="Resumen *"
              className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
              required
              defaultValue={editMode ? currentBlog.resumen : ''}
            />
            <input
              type="text"
              name="slug"
              placeholder="Slug *"
              className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
              required
              defaultValue={editMode ? currentBlog.slug : ''}
            />
            <input
              type="text"
              name="titulo"
              placeholder="Título *"
              className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
              required
              defaultValue={editMode ? currentBlog.titulo : ''}
            />
            <div>
              <input
                type="file"
                name="imagen"
                accept="image/*"
                className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                onChange={handleImageChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Procesando...' : (editMode ? 'Actualizar' : 'Enviar')}
            </button>
          </form>
        </div>
        <div className="bg-customFormGreen rounded-lg shadow-lg p-6">
          <h3 className="text-xl text-white mb-4">Lista de Artículos</h3>
          <ul className="space-y-4">
            {blogs.map(blog => (
              <li key={blog.id} className="bg-teal-700 text-white p-4 rounded-lg shadow-lg">
                <h4 className="text-2xl mb-2">{blog.titulo}</h4>
                <p>{blog.resumen}</p>
                <div className="mt-4">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="bg-teal-500 text-white py-1 px-3 rounded hover:bg-teal-600 transition duration-300 mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-300"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminArticle;
