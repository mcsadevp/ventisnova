import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CursosView from './pages/CursosView';
import BlogView from './pages/BlogView';
import HomeView from './pages/HomeView';
import { AuthProvider } from './context/AuthContext';
import RegisterFormView from './pages/RegisterFormView';
import UserDashboardView from './pages/UserDashboardView';
import LoginFormView from './pages/LoginFormView';
import MentoriasYTutoriasView from './pages/MentoriasYTutoriasView';
import ContactView from './pages/ContactView';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/cursosView" element={<CursosView />} />
            <Route path='/blogView' element={<BlogView />} />
            <Route path="/register" element={<RegisterFormView />} />
            <Route path="/dashboard" element={<UserDashboardView />} />
            <Route path="/perfil" element={<LoginFormView />} />
            <Route path="/mentorias-y-tutorias" element={<MentoriasYTutoriasView />} />
            <Route path="/contact" element={<ContactView/>}/>
          </Routes>
        </Router>
      </AuthProvider>
    </div>

  );
}

export default App;