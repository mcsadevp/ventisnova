import { useParams } from 'react-router-dom';

const articles = [
  { id: '1', title: 'The Future of Technology', content: 'Technology is evolving at an unprecedented pace, and it continues to reshape how we live, work, and communicate. From AI to blockchain, these innovations are changing the world.' },
  { id: '2', title: 'How to Simplify Your Life with Technology', content: 'By leveraging the right technology, you can simplify everyday tasks, improve productivity, and stay organized. This article explores some practical tips on integrating technology into your daily routine.' },
  { id: '3', title: 'The Impact of AI on Daily Life', content: 'AI has become an integral part of our daily lives, from personalized recommendations to smart home devices. This article delves into how AI is shaping industries and enhancing personal experiences.' },
];

const Article = () => {
  const { id } = useParams(); //for getting the article id from the URL

  // Find the article based on the id
  const article = articles.find((article) => article.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl text-white">Article not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl text-white">Article: {article.title}</h2>
      <p className="text-lg text-white mt-4 max-w-2xl text-center">{article.content}</p>
    </div>
  );
};

export default Article;
