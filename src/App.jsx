import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import CursosView from './pages/CursosView';
import ContactoView from './pages/ContactoView';
import BlogView from './pages/BlogView';
import HomeView from './pages/HomeView';


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<HomeView />}/>
          <Route path="/cursosView" element={<CursosView />} />
          <Route path='/blogView' element={<BlogView />} />
          <Route path="/contactoView" element={<ContactoView />} />
        </Routes>
    </Router>

  );
}

export default App;