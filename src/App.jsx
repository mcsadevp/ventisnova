import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import CursosView from './pages/CursosView';
import ContactoView from './pages/ContactoView';
import BlogView from './pages/BlogView';
import HomeView from './pages/HomeView';
import LoginView from './pages/LoginView';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
   <div>
    <AuthProvider>
      <Router>
        
        <Navbar />
        <Routes>
          <Route path="/"  element={<HomeView />}/>
          <Route path="/cursosView" element={<CursosView />} />
          <Route path='/blogView' element={<BlogView />} />
          <Route path="/contactoView" element={<ContactoView />} />
          <Route path="/perfil" element={<LoginView />} />
        </Routes>
    </Router>
    </AuthProvider>
   </div>

  );
}

export default App;