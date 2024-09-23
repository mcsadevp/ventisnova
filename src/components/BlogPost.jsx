import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const querySnapshot = await getDocs(collection(db, 'blog'));
      const foundBlog = querySnapshot.docs.find(doc => doc.data().slug === slug);

      if (foundBlog) {
        setBlog(foundBlog.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="min-h-screen">
      <div className="w-full h-36 text-center bg-gradient-to-b from-[#174839] to-[#44A385] md:pt-10 pt-3">
      <h1 className="text-3xl font-bold mt-5 text-white text-center mb-4">{blog.titulo}</h1>
        </div>
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-6">
        <img
          src={blog.imagen}
          alt={blog.titulo}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <div className="text-gray-400 text-lg leading-relaxed">
          {blog.contenidoCompleto.split('\n').map((paragraph, idx) => (
            <p key={idx} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
