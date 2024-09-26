import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { CiMail } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <hr className="mt-8" />
      <footer className="bg-customGradient py-5 text-white text-center">
        <div className="social-icons  flex justify-center space-x-6  ">
          <a href="https://www.linkedin.com/company/ventisnova" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon mx-4 text-3xl" />
          </a>
          <a href="https://www.instagram.com/ventisnova/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon text-3xl mr-4 " />
          </a>
          <NavLink to="/contact">
            <CiMail className="icon text-3xl" />
          </NavLink>
        </div>
        <div className="mt-4">
          <p>© 2024 Ventis Nova. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
