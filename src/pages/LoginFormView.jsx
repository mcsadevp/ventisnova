/**
 * @file LoginFormView.jsx
 * @description Componente para la vista de inicio de sesión que presenta el formulario de inicio de sesión.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente integra el formulario de inicio de sesión en un fondo personalizado.
 */

import { useAuth } from "../context/AuthContext"; // Importa el contexto de autenticación
import LoginForm from "../components/LoginForm"; // Importa el formulario de inicio de sesión
import backgroundImage from "../assets/bg-form6.jpg"; // Importa la imagen de fondo
import Navbar from "../components/Navbar"; // Importa el componente de navegación

/**
 * Componente principal para la vista de inicio de sesión.
 * @returns {JSX.Element} Un contenedor que muestra el formulario de inicio de sesión.
 */
function LoginFormView() {
  const auth = useAuth(); // Obtiene el contexto de autenticación

  return (
    <div 
      className={`h-screen flex flex-col flex-1 bg-center bg-no-repeat`} 
      style={{ 
        backgroundImage: `url(${backgroundImage})`,  
        backgroundSize: 'cover'
      }}
    >
      <Navbar /> {/* Barra de navegación superior */}
      <div className="flex flex-1 items-center justify-center">
        <div> 
          <LoginForm auth={auth} /> {/* Renderiza el formulario de inicio de sesión */}
        </div>
      </div>
    </div>
  );
}

export default LoginFormView; // Exporta el componente para su uso en otras partes de la aplicación
