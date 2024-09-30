/**
 * @file AdminArticle.jsx
 * @description Componente CRUD en la aplicación.
 * @version 1.0.0
 * @date 2024-09-30
 * @author McKinstong
 * @company Ventisnova
 * @license Copyright © 2024 Vebtisnova
 * @notes Permite realizar operaciones CRUD en los artículos.
 */


import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/firebaseConfig';
import Navbar from "./Navbar";
import { useAlert } from '../context/AlertContext';

const AdminArticle = () => {
  // Inicializa el contexto de alerta y las variables de estado
  const { setAlert } = useAlert();
  const [blogs, setBlogs] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Efecto que se ejecuta al montar el componente para obtener los blogs
  useEffect(() => {
    fetchBlogs();
  }, []);

  /**
   * Función para obtener los blogs desde Firestore.
   * @returns {Promise<void>} No retorna nada, pero actualiza el estado con los blogs obtenidos.
   */
  const fetchBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'blog'));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(data);
    } catch (error) {
      setAlert('Error al cargar los artículos: ' + error.message);
    }
  };

  /**
   * Función para subir una imagen a Firebase Storage.
   * @param {File} file - Archivo de imagen a subir.
   * @returns {Promise<string|null>} URL de la imagen subida o null si no se proporciona un archivo.
   */
  const uploadImage = async (file) => {
    if (!file) return null;
    const storageRef = ref(storage, 'blog-images/' + file.name);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  /**
   * Función que maneja el envío del formulario para agregar o actualizar un blog.
   * @param {Event} event - Evento de envío del formulario.
   * @returns {Promise<void>} No retorna nada, pero actualiza el estado según la operación realizada.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;

    try {
      let imageUrl = currentBlog?.imagen;
      // Si se ha seleccionado un archivo, se sube la imagen
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      // Se prepara el objeto de datos del nuevo blog
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

      // Se determina si se actualiza un blog existente o se añade uno nuevo
      if (editMode) {
        await updateDoc(doc(db, 'blog', currentBlog.id), newBlog);
        setAlert('Artículo actualizado exitosamente!');
        setEditMode(false);
      } else {
        await addDoc(collection(db, 'blog'), newBlog);
        setAlert('Artículo agregado exitosamente!');
      }

      // Se reinicia el formulario y se actualiza la lista de blogs
      form.reset();
      setImageFile(null);
      setCurrentBlog(null);
      fetchBlogs();
    } catch (error) {
      setAlert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Función que establece el blog actual para editar.
   * @param {Object} blog - Objeto del blog a editar.
   */
  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    setEditMode(true);
    setImageFile(null);
  };

  /**
   * Función que elimina un artículo.
   * @param {string} id - ID del blog a eliminar.
   * @returns {Promise<void>} No retorna nada, pero actualiza la lista de blogs tras la eliminación.
   */
  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este artículo?')) {
      try {
        await deleteDoc(doc(db, 'blog', id));
        setAlert('Artículo eliminado exitosamente!');
        fetchBlogs();
      } catch (error) {
        setAlert('Error al eliminar el artículo: ' + error.message);
      }
    }
  };

  /**
   * Función que maneja la selección de un archivo de imagen.
   * @param {Event} event - Evento de cambio del input de archivo.
   */
  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  // Renderiza el componente de administración de artículos
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
          <h3 className="text-xl text-white font-semibold mb-4">Lista de Artículos</h3>
          <ul className="space-y-4">
            {blogs.map((blog) => (
              <li key={blog.id} className="border-b pb-4">
                <h4 className="text-l text-customGreen">{blog.titulo}</h4>
                <p className="text-sm text-white mb-2">{blog.resumen}</p>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEdit(blog)} 
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition duration-300"
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => handleDelete(blog.id)} 
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
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
