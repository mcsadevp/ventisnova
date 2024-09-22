import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]); // Mantener como array vacío

    useEffect(() => {
        const fetchBlogs = async () => {
            const querySnapshot = await getDocs(collection(db, 'blog'));
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setBlogs(data);
        };

        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-500 p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-6">Blog</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.length === 0 ? ( // Verifica si blogs está vacío
                        <p className="text-white">No hay blogs disponibles.</p>
                    ) : (
                        blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
                            >
                                <img
                                    src={blog.imagen}
                                    alt={blog.titulo}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-bold text-white mb-2">
                                        {blog.titulo}
                                    </h2>
                                    <p className="text-gray-400 mb-4">{blog.resumen}</p>
                                    <button
                                        onClick={() => (window.location.href = `/noticiaView/${blog.slug}`)}
                                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                                    >
                                        Ver artículo
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogList;
