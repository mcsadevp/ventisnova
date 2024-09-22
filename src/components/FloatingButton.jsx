import React from 'react';
import { Link } from 'react-router-dom';

const FloatingButton = ({ isAdmin, path }) => {
  if (!isAdmin) return null;

  return (
    <div
      className="fixed bottom-5 right-5 z-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer shadow-md"
    >
      <Link to={path}>
        <i className="fas fa-cog" /> 
      </Link>
    </div>
  );
};

export default FloatingButton;