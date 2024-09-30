/**
 * @file App.jsx
 * @description Componente principal de la aplicación que gestiona las rutas y el contexto de autenticación.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente utiliza React Router para gestionar las rutas y proporciona protección a las rutas privadas.
 */

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import CursosView from './pages/CursosView';
import BlogView from './pages/BlogView';
import HomeView from './pages/HomeView';
import { AuthProvider } from './context/AuthContext';
import RegisterFormView from './pages/RegisterFormView';
import UserDashboardView from './pages/UserDashboardView';
import LoginFormView from './pages/LoginFormView';
import MentoriasYTutoriasView from './pages/MentoriasYTutoriasView';
import ContactView from './pages/ContactView';
import AlertProvider from './context/AlertContext';
import AdminArticleView from './pages/AdminArticleView';
import MentoriasView from './pages/MentoriasView';
import TutoriasView from './pages/TutoriasView';
import NoticiaView from './pages/NoticiaView'; // Asegúrate de importar NoticiaView
import FloatButtonWhatsapp from './components/FloatButtonWhatsapp';

/**
 * ProtectedRoute - Componente para proteger rutas privadas.
 * @param {Object} props - Propiedades del componente.
 * @returns {JSX.Element} - Renderiza los hijos si el usuario está autenticado, de lo contrario, redirige al login.
 */
function ProtectedRoute({ children }) {
  const { user } = useAuth();  // Obtiene el usuario desde el contexto de autenticación
  return user ? children : <Navigate to="/perfil" />;  // Redirige si no hay usuario autenticado
}

/**
 * App - Componente principal de la aplicación.
 * @returns {JSX.Element} - Renderiza la aplicación con las rutas configuradas.
 */
function App() {
  return (
    <div>
      <FloatButtonWhatsapp />  {/* Botón flotante de WhatsApp */}
      <AuthProvider>
        <AlertProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/cursosView" element={<CursosView />} />
              <Route path="/blogView" element={<BlogView />} />
              <Route path="/noticiaView/:slug" element={<NoticiaView />} /> {/* Usar :slug para rutas dinámicas */}
              <Route path="/register" element={<RegisterFormView />} />
              <Route path="/dashboard" element={<ProtectedRoute><UserDashboardView /></ProtectedRoute>} />
              <Route path="/admin-article" element={<ProtectedRoute><AdminArticleView /></ProtectedRoute>} />
              <Route path="/perfil" element={<LoginFormView />} />
              <Route path="/mentorias-y-tutorias" element={<MentoriasYTutoriasView />} />
              <Route path="/contact" element={<ContactView />} />
              <Route path="/mentorias" element={<MentoriasView />} />
              <Route path="/tutorias" element={<TutoriasView />} />
            </Routes>
          </Router>
        </AlertProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
