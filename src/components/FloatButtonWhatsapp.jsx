/**
 * @file FloatButtonWhatsapp.jsx
 * @description Componente para un botón flotante de WhatsApp.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente permite a los usuarios contactar fácilmente a través de WhatsApp mediante un botón flotante en la esquina de la pantalla.
 */

import { FaWhatsapp } from 'react-icons/fa';

/**
 * Componente para el botón flotante de WhatsApp.
 * @returns {JSX.Element} Un enlace que abre un chat de WhatsApp al hacer clic.
 */
const FloatButtonWhatsapp = () => {
  return (
    <a
      href="https://wa.me/5491166850200" // Enlace para iniciar un chat de WhatsApp
      target="_blank" // Abre en una nueva pestaña
      rel="noopener noreferrer" // Mejora la seguridad al abrir enlaces externos
      className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors z-20" // Estilos para el botón
    >
      <FaWhatsapp size={36} className='text-white' /> {/* Icono de WhatsApp */}
    </a>
  );
};

export default FloatButtonWhatsapp;
