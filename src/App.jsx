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
import AddArticleView from './pages/AddArticleView';
import MentoriasView from './pages/MentoriasView';
import TutoriasView from './pages/TutoriasView';
import NoticiaView from './pages/NoticiaView'; // Asegúrate de importar NoticiaView

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/perfil" />;
}

function App() {
  return (
    <div>
      <AuthProvider>
        <AlertProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/cursosView" element={<CursosView />} />
              <Route path='/blogView' element={<BlogView />} />
              <Route path='/noticiaView/:slug' element={<NoticiaView />} /> {/* Usar :slug */}
              <Route path="/register" element={<RegisterFormView />} />
              <Route path="/dashboard" element={<ProtectedRoute><UserDashboardView /></ProtectedRoute>} />
              <Route path="/addarticle" element={<ProtectedRoute><AddArticleView /></ProtectedRoute>} />
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
