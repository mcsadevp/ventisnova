/**
 * @file AdminArticleView.jsx
 * @description Componente para la vista de administración de artículos.
 * @version 1.0.0
 * @date 2024-09-30
 * @author EQUIPO-VENTISNOVA
 * @company Ventisnova
 * @license Copyright © 2024 Ventisnova
 * @notes Este componente agrupa la vista de administración de artículos y el pie de página.
 */

import Footer from '../components/Footer'; // Importa el componente del pie de página
import AdminArticle from '../components/AdminArticle'; // Importa el componente para gestionar artículos

/**
 * Componente principal para la vista de administración de artículos.
 * @returns {JSX.Element} La vista de administración de artículos con un pie de página.
 */
const AdminArticleView = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AdminArticle /> {/* Componente para la gestión de artículos */}
      <Footer /> {/* Componente del pie de página */}
    </div>
  );
};

export default AdminArticleView; // Exporta el componente para su uso en otras partes de la aplicación
