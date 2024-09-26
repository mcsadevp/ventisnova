import BlogPost from "../components/BlogPost"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { IoMdArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const NoticiaView = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="mt-20">
        <Navbar />
      </div>
      {/* Back Arrow Icon */}
      <div className="absolute top-20 left-4  md:top-28 md:ml-8 z-50">
        <NavLink to="/blogView">
          {/* Adjust arrow size based on screen size */}
          <IoMdArrowBack
            size={20}  
            className="text-white cursor-pointer hover:text-gray-200 md:size-30"  
          />
          {/* Hide the "Volver" text on mobile and show it on medium screens */}
          <p className="hidden md:block text-white font-thin cursor-pointer hover:text-gray-200">Volver</p>
        </NavLink>
      </div>
      <BlogPost />
      <Footer />
    </div>
  );
}
  
  export default NoticiaView