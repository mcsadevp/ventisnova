/**
 * @file Footer.jsx
 * @description Componente que representa el pie de página de la aplicación.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente incluye enlaces a redes sociales y una opción de contacto.
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { CiMail } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

/**
 * Componente del pie de página de la aplicación.
 * @returns {JSX.Element} El pie de página que contiene íconos de redes sociales y derechos de autor.
 */
function Footer() {
  return (
    <>
      <hr className="mt-8" /> {/* Línea divisoria superior */}
      <footer className="bg-customGradient py-5 text-white text-center">
        <div className="social-icons flex justify-center space-x-6">
          {/* Icono de LinkedIn */}
          <a href="https://www.linkedin.com/company/ventisnova" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon mx-4 text-3xl" />
          </a>
          {/* Icono de Instagram */}
          <a href="https://www.instagram.com/ventisnova/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon text-3xl mr-4" />
          </a>
          {/* Icono de correo electrónico que redirige a la página de contacto */}
          <NavLink to="/contact">
            <CiMail className="icon text-3xl" />
          </NavLink>
        </div>
        <div className="mt-4">
          <p>© 2024 Ventis Nova. Todos los derechos reservados.</p> {/* Derechos de autor */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
