import React, { useEffect, useState } from 'react'; 
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig'; // Asegúrate de que la ruta sea correcta
import Navbar from "./Navbar";
import backgroundImage from "../assets/page-form.png";
import { useAlert } from '../context/AlertContext'; 

const AdminArticle = () => {
  const { setAlert } = useAlert();
  const [blogs, setBlogs] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, 'blog'));
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setBlogs(data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const newBlog = {
      autor: form.autor.value,
      categoria: form.categoria.value,
      contenidoCompleto: form.contenidoCompleto.value,
      fechaPublicacion: new Date().toISOString(), // Cambiar según la lógica que necesites
      imagen: imageFile ? await uploadImage(imageFile) : currentBlog.imagen, // Lógica para subir imagen
      resumen: form.resumen.value,
      slug: form.slug.value,
      titulo: form.titulo.value
    };

    if (editMode) {
      await updateDoc(doc(db, 'blog', currentBlog.id), newBlog);
      setAlert('Blog updated successfully!');
      setEditMode(false);
    } else {
      await addDoc(collection(db, 'blog'), newBlog);
      setAlert('Blog added successfully!');
    }

    form.reset();
    setImageFile(null); // Reset image file state
    fetchBlogs(); // Refresca la lista de blogs
  };

  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    setEditMode(true);
    setImageFile(null); // Reset image file state
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'blog', id));
    setAlert('Blog deleted successfully!');
    fetchBlogs(); // Refresca la lista de blogs
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const uploadImage = async (file) => {
    // Aquí debes implementar la lógica para subir la imagen a un servicio de almacenamiento (como Firebase Storage)
    // Retorna la URL de la imagen después de subirla
    return "URL_DE_LA_IMAGEN"; // Cambia esto por la URL real después de la subida
  };

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-40 text-center bg-gradient-to-b from-[#174839] to-[#44A385]">
        <Navbar />
        <h2 className="text-3xl font-semibold text-white leading-tight text-left ml-[85px]">
          {editMode ? 'Editar Artículo' : 'Agregar Artículo'}
        </h2>
      </div>
      <div className="h-full bg-center bg-no-repeat flex flex-col" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`,  
          backgroundSize: 'cover'
        }} >
        <div className="bg-customFormGreen text-white px-8 py-6 rounded-lg shadow-lg absolute left-1/2 transform -translate-x-1/2 top-[200%] -translate-y-1/2 w-11/12 max-w-4xl">
          <form id="form" className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="autor"
                placeholder="Autor *"
                className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                required
                defaultValue={editMode ? currentBlog.autor : ''}
              />
            </div>
            <div>
              <input
                type="text"
                name="categoria"
                placeholder="Categoría *"
                className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                required
                defaultValue={editMode ? currentBlog.categoria : ''}
              />
            </div>
            <div>
              <textarea
                name="contenidoCompleto"
                placeholder="Contenido Completo *"
                rows="4"
                className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400 resize-none"
                required
                defaultValue={editMode ? currentBlog.contenidoCompleto : ''}
              ></textarea>
            </div>
            <div>
              <input
                type="text"
                name="resumen"
                placeholder="Resumen *"
                className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                required
                defaultValue={editMode ? currentBlog.resumen : ''}
              />
            </div>
            <div>
              <input
                type="text"
                name="slug"
                placeholder="Slug *"
                className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                required
                defaultValue={editMode ? currentBlog.slug : ''}
              />
            </div>
            <div>
              <input
                type="text"
                name="titulo"
                placeholder="Título *"
                className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                required
                defaultValue={editMode ? currentBlog.titulo : ''}
              />
            </div>
            <div>
              <input
                type="file"
                name="imagen"
                accept="image/*"
                className="w-full bg-transparent text-white"
                onChange={handleImageChange}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                id="button"
                className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300 w-full"
              >
                {editMode ? 'Actualizar' : 'Enviar'}
              </button>
            </div>
          </form>
        </div>
        <div className="mt-6">
          <h3 className="text-xl text-white">Lista de Artículos</h3>
          <ul>
            {blogs.map((blog) => (
              <li key={blog.id} className="text-white">
                <h4>{blog.titulo}</h4>
                <button onClick={() => handleEdit(blog)} className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded">Editar</button>
                <button onClick={() => handleDelete(blog.id)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminArticle;
