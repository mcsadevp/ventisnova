import Navbar from "./Navbar";
import backgroundImage from "../assets/page-form.png";

const ContactForm = () => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-40 text-center bg-gradient-to-b from-[#174839] to-[#44A385]">
        <Navbar />
        <h2 className="text-3xl font-semibold text-white leading-tight text-left ml-[85px]">
          Contacto
        </h2>
        <p className="text-white text-lg mt-2 text-left ml-[85px]">
          ¡Déjanos tu consulta! Apenas la veamos, te responderemos por mail.
        </p>
      </div>
      <div  className="h-full bg-center bg-no-repeat flex flex-col" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`,  
          backgroundSize: 'cover'
        }} >
        <div className="bg-customFormGreen text-white px-8 py-6 rounded-lg shadow-lg absolute left-1/2 transform -translate-x-1/2 top-[200%] -translate-y-1/2 w-11/12 max-w-4xl">
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Nombre *"
                className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="E-Mail *"
                className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Mensaje *"
                rows="4"
                className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400 resize-none"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300 w-full"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
