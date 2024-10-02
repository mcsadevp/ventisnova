/**
 * @file ContactForm.jsx
 * @description Componente para el formulario de contacto en la aplicación.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente permite a los usuarios enviar consultas a través de un formulario.
 */

import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import backgroundImage from "../assets/page-form.png";
import { useAlert } from '../context/AlertContext';
import { useForm, ValidationError } from '@formspree/react';

/**
 * ContactForm - Componente principal para el formulario de contacto.
 * @returns {JSX.Element} - Renderiza el formulario de contacto.
 */
const ContactForm = () => {
  const { setAlert } = useAlert(); // Hook para mostrar alertas
  const [state, handleSubmit] = useForm("mkgwddrg"); // Hook de Formspree para manejar el formulario
  const [isAlertShown, setIsAlertShown] = useState(false); // Estado para controlar si la alerta ya fue mostrada

  // Mostrar mensaje de éxito usando useEffect cuando el formulario se envía correctamente
  useEffect(() => {
    // Solo mostrar la alerta si aún no ha sido mostrada y si el envío fue exitoso
    if (state.succeeded && !isAlertShown) {
      setAlert("¡Tu mensaje ha sido enviado con éxito!"); // Alerta de éxito
      setIsAlertShown(true); // Evitar que la alerta se muestre más de una vez
    }
  }, [state.succeeded, isAlertShown, setAlert]);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Navbar /> {/* Barra de navegación */}
      <div className="w-full h-40 text-center bg-gradient-to-b from-[#174839] to-[#44A385]">
        <div className="flex flex-col justify-left md:pl-24">
          <h2 className="text-2xl font-semibold text-white leading-tight md:text-left text-center md:mt-20 mt-[70px]">
            Contacto
          </h2>
          <p className="text-white text-md mt-2 mb-2 text-center md:text-lg md:text-left">
            ¡Déjanos tu consulta! Apenas la veamos, te responderemos por mail.
          </p>
        </div>
      </div>
      <div 
        className="h-[calc(100vh-8rem)] bg-center bg-no-repeat flex flex-col" 
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }} // Establece la imagen de fondo
      >
        <div className="flex justify-center items-center h-full">
          <div className="bg-customFormGreen text-white px-6 py-8 rounded-lg shadow-lg w-11/12 max-w-4xl">
            {state.succeeded ? ( // Si el formulario se envía correctamente, muestra el mensaje de confirmación
              <p className="text-center text-green-500">¡Gracias por tu mensaje! Te responderemos pronto.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4"> {/* Maneja el envío del formulario */}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-teal-200">Tu email*</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="E-Mail *"
                    className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                    required // Campo obligatorio
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm" // Muestra errores de validación
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-teal-200">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Escribe tu mensaje aquí"
                    rows="4"
                    className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400 resize-none"
                    required // Campo obligatorio
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm" // Muestra errores de validación
                  />
                </div>
                <div>
                  <button 
                    type="submit" 
                    disabled={state.submitting} // Desactiva el botón mientras se envía
                    className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300 w-full"
                  >
                    {state.submitting ? "Enviando..." : "Enviar"} {/* Muestra estado del envío */}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
