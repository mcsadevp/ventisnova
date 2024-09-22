import Footer from '../components/Footer';
import AdminArticle from '../components/AdminArticle';

const AdminArticleView = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AdminArticle/>
      <Footer/>
    </div>
  );
};

export default AdminArticleView;