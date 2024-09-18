import Footer from '../components/Footer';
import AddArticle from '../components/AddArticle';

const AddArticleView = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AddArticle/>
      <Footer/>
    </div>
  );
};

export default AddArticleView;