import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import backgroundImage from "../assets/page-form.png";
import { init, send } from '@emailjs/browser';
import { useAlert } from '../context/AlertContext';

const ContactForm = () => {
  const { setAlert } = useAlert();
  const location = useLocation();
  const messageFromState = location.state?.mensaje || '';

  useEffect(() => {
    init('SYt0hbgqWPa-pzDHv');
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const btn = event.target.querySelector('#button');
    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_x3n9aeo';

    const templateParams = {
      from_name: event.target.from_name.value,
      from_email: event.target.from_email.value,
      message: event.target.message.value,
    };

    send(serviceID, templateID, templateParams)
      .then(() => {
        btn.value = 'Send Email';
        setAlert('Sent!');
        event.target.reset();
      }, (err) => {
        btn.value = 'Send Email';
        setAlert(JSON.stringify(err));
      });
  };

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Navbar />
      <div className="w-full h-40 text-center bg-gradient-to-b from-[#174839] to-[#44A385]">
          <div className="flex flex-col justify-left md:pl-24"><h2 className="text-2xl font-semibold text-white leading-tight md:text-left text-center">
          Contacto
        </h2>
        <p className="text-white text-md mt-2 mb-2 text-center  md:text-lg md:text-left ">
          ¡Déjanos tu consulta! Apenas la veamos, te responderemos por mail.
        </p></div>
        </div>
     
      <div 
        className="h-[calc(100vh-8rem)] bg-center bg-no-repeat flex flex-col" 
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
      >
        <div className="flex justify-center items-center h-full">
          <div className="bg-customFormGreen text-white px-6 py-8 rounded-lg shadow-lg w-11/12 max-w-4xl">
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
                  defaultValue={messageFromState}
                />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
