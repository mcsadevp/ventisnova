import React from 'react';
import ContactForm from '../components/ContactForm';

import Footer from '../components/Footer';
import FloatButtonWhatsapp from '../components/FloatButtonWhatsapp';

const ContactView = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <ContactForm/>
      <Footer/>
      <FloatButtonWhatsapp />
    </div>
  );
};

export default ContactView;
