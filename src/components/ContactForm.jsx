import React, { useEffect } from 'react'; // Asegúrate de importar useEffect
import Navbar from "./Navbar";
import backgroundImage from "../assets/page-form.png";
import emailjs from 'emailjs-com'; // Importar EmailJS

const ContactForm = () => {
  useEffect(() => {
    emailjs.init('SYt0hbgqWPa-pzDHv'); // Reemplaza con tu User ID
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    const btn = event.target.querySelector('#button');
    btn.value = 'Sending...';

    const serviceID = 'default_service'; // Cambia esto si usas un servicio diferente
    const templateID = 'template_x3n9aeo'; // Cambia esto por tu Template ID

    emailjs.sendForm(serviceID, templateID, event.target)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  };

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
      <div className="h-full bg-center bg-no-repeat flex flex-col" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`,  
          backgroundSize: 'cover'
        }} >
        <div className="bg-customFormGreen text-white px-8 py-6 rounded-lg shadow-lg absolute left-1/2 transform -translate-x-1/2 top-[200%] -translate-y-1/2 w-11/12 max-w-4xl">
          <form id="form" className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Nombre *"
                className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="from_email"
                placeholder="E-Mail *"
                className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Mensaje *"
                rows="4"
                className="w-full bg-transparent border-b border-teal-600 text-white placeholder-teal-500 py-2 focus:outline-none focus:border-teal-400 resize-none"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                id="button"
                className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-300 w-full"
              >
                Enviar
              </button>
            </div>
          </form>
          <script type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

          <script type="text/javascript">
            emailjs.init('SYt0hbgqWPa-pzDHv')
          </script>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
