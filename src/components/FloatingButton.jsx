import React from 'react';
import { NavLink } from 'react-router-dom';

const FloatingButton = ({ isAdmin }) => {
  if (!isAdmin) return null;

  return (
    <div className="fixed bottom-5 left-5 z-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer shadow-md">
      <NavLink to="/admin-article">
        <button className="text-white">Panel Admin</button>
      </NavLink>
    </div>
  );
};

export default FloatingButton;
