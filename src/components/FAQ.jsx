import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { IoIosArrowRoundDown } from "react-icons/io";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg text-white">{question}</h3>
        <span className="text-white">
          {isOpen ? <FiX size={24} /> : <IoIosArrowRoundDown  size={28} />}
        </span>
      </div>
      {isOpen && <p className="mt-2 text-white">{answer}</p>}
    </div>
  );
};

const FAQ = ({ data }) => {
  return (
    <div className="max-w-2xl mx-auto p-4 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Preguntas frecuentes</h2>
      {data.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;
