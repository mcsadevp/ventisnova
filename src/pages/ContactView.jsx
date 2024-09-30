/**
 * @file ContactView.jsx
 * @description Componente para la vista de contacto que permite a los usuarios enviar un formulario.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente incluye un formulario de contacto y un pie de página.
 */

import React from 'react'; // Importa React
import ContactForm from '../components/ContactForm'; // Importa el componente del formulario de contacto
import Footer from '../components/Footer'; // Importa el componente del pie de página

/**
 * Componente principal para la vista de contacto.
 * @returns {JSX.Element} La vista de contacto con el formulario y el pie de página.
 */
const ContactView = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between"> {/* Contenedor principal que ocupa al menos toda la altura de la pantalla */}
      <ContactForm /> {/* Componente que renderiza el formulario de contacto */}
      <Footer /> {/* Componente del pie de página */}
    </div>
  );
};

export default ContactView; // Exporta el componente para su uso en otras partes de la aplicación

