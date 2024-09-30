/**
 * @file FAQ.jsx
 * @description Componente para mostrar preguntas frecuentes en un formato desplegable.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente permite a los usuarios ver y ocultar las respuestas a preguntas frecuentes, mejorando la experiencia de usuario al interactuar con el contenido.
 */

import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { IoIosArrowRoundDown } from "react-icons/io";

/**
 * Componente para un ítem de pregunta frecuente.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.question - La pregunta a mostrar.
 * @param {string} props.answer - La respuesta asociada a la pregunta.
 * @returns {JSX.Element} Un ítem de pregunta frecuente que permite expandir y colapsar la respuesta.
 */
const FAQItem = ({ question, answer }) => {
  // Estado para controlar si la respuesta está abierta o cerrada
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)} // Cambia el estado al hacer clic
      >
        <h3 className="text-lg text-white">{question}</h3>
        <span className="text-white">
          {isOpen ? <FiX size={24} /> : <IoIosArrowRoundDown size={28} />}
        </span>
      </div>
      {isOpen && <p className="mt-2 text-white">{answer}</p>} {/* Muestra la respuesta si está abierta */}
    </div>
  );
};

/**
 * Componente para mostrar una lista de preguntas frecuentes.
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.data - Array de objetos que contienen preguntas y respuestas.
 * @returns {JSX.Element} Un contenedor que muestra todas las preguntas frecuentes.
 */
const FAQ = ({ data }) => {
  return (
    <div className="max-w-2xl mx-auto p-4 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Preguntas frecuentes</h2>
      {data.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;
