import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const querySnapshot = await getDocs(collection(db, 'blog'));
      const foundBlog = querySnapshot.docs.find((doc) => doc.data().slug === slug);

      if (foundBlog) {
        setBlog(foundBlog.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchBlog();
  }, [slug]);

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
