import { useParams } from 'react-router-dom';

const article = [
  { id: '1', title: 'The Future of Technology' },
  { id: '2', title: 'How to Simplify Your Life with Technology' },
  { id: '3', title: 'The Impact of AI on Daily Life' },
];

const Article = () => {
  const { id } = useParams(); //for getting the article id from the URL
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl text-white">Article not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className=" text-2xl text-white min-h-screen flex flex-col items-center justify-center">Article {id}</h2>
      <p className="text-lg text-white"> this is the article content ID: {id}</p>
    </div>
  );
};

export default Article;
