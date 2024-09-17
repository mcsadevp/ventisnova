function Footer() {
  return (
    <footer className="bg-gray-800 py-5 text-white text-center">
      <div className="flex flex-col items-center max-w-5xl mx-auto">
        <p>&copy; 2024 VENTISNOVA. Todos los derechos reservados.</p>
        <ul className="list-none p-0 mt-2 flex gap-4">
          <li><a href="info@ventisnova.com.ar" className="text-white hover:underline">Envíanos un correo</a></li>
          <li><a href="https://api.whatsapp.com/send?phone=5491166850200" className="text-white hover:underline">nuestro WhatsApp</a></li>
          <li><a href="https://www.linkedin.com/company/ventisnova" target="_blank" className="text-white hover:underline">Mira nuestro LinkedIn</a></li>
          <li><a href="https://www.instagram.com/ventisnova/" target="_blank" className="text-white hover:underline">Visita nuestro IG</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
