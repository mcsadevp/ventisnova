import React from 'react';
import { Eye } from 'lucide-react';

const AccountForm = () => {
  return (
    <div className="bg-teal-700 text-white px-24 py-8 rounded-lg shadow-lg absolute left-1/2 transform -translate-x-1/2 z-10 mt-28">
    <form className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Nombre *"
          className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="E-Mail *"
          className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Mensaje *"
          rows="4"
          className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400 resize-none"
          required
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300 w-full"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
);
};

export default AccountForm;