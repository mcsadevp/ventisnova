import { FaWhatsapp } from 'react-icons/fa';

const FloatButtonWhatsapp = () => {
  return (
    <a
      href="https://wa.me/5491166850200"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors z-20"
    >
      <FaWhatsapp size={36} className='text-white' />
    </a>
  );
};

export default FloatButtonWhatsapp;