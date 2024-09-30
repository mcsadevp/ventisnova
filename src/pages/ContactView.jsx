import React from 'react';
import ContactForm from '../components/ContactForm';

import Footer from '../components/Footer';

const ContactView = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default ContactView;
