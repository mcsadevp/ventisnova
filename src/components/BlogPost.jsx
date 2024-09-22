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
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-500 p-6">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-lg p-6">
        <img
          src={blog.imagen}
          alt={blog.titulo}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-white mb-4">{blog.titulo}</h1>
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
