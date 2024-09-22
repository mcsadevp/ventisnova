import Footer from '../components/Footer';
import AddArticle from '../components/AddArticle';
import FloatButtonWhatsapp from '../components/FloatButtonWhatsapp';

const AddArticleView = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AddArticle/>
      <Footer/>
      <FloatButtonWhatsapp />
    </div>
  );
};

export default AddArticleView;