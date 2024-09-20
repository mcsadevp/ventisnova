import image6 from '../assets/image 6.png';
import image5 from '../assets/image 5.png';
import image11 from '../assets/image 11.png';
import maskgroup from '../assets/Mask group.png';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeView = () => {
  return (
    <div>

      <div className="h-1/2  bg-custom-gradient ">
        <Navbar />
        <nav className="flex justify-between items-center p-6">{/* Navigation can go here if needed */}</nav>
        <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12">
          {/* Text Section */}
          <div className="w-full text-center md:w-1/2">
            <h2 className="text-3xl font-semibold text-white leading-tight">
              ¡No dejes que la falta <br /> de experiencia te detenga!
            </h2>
            <p className="text-white text-lg mt-6">La tecnologia es una herramienta poderosa.</p>
            <p className="text-white font-thin mt-4 md:hidden">
              El camino hacia tu emprendimiento soñado <br />
              empieza acá.
            </p>
            <NavLink to="/mentorias-y-tutorias">
              <button className="bg-white text-black font-semibold rounded-md px-6 py-4 mt-8">Potenciate ahora</button>
            </NavLink>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center self-end">
            <div className="relative p-4 rounded-full">
              <img src={image5} alt="Person with laptop" className="relative z-10 h-auto max-w-full hidden mb-0 md:block " />
            </div>
          </div>
        </div>

      </div>
      {/* register container */}

      <div className="bg-white w-full h-60 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-xl sm:text-2xl font-semibold text-black">Unite a nuestra comunidad de emprendedores.</h1>

          <NavLink to="/register">
            <button className="bg-customGreen text-black font-semibold px-6 py-2 mt-4 rounded-md">Registrate</button>
            <p className="text-black mt-4"></p>
          </NavLink>
        </div>
      </div>

      {/* container de habilidades y tutorias */}
      <div className="bg-customDarkGreen p-8 flex justify-center items-center ">
        {/* First Container */}
        <div className=" w-full max-w-6xl grid md:grid-cols-2 gap-8 mb-0 border border-white  rounded-lg p-6">
          {/* Left Text Section */}
          <div className=" flex flex-col justify-center rounded-lg">
            <h2 className="text-1xl text-white mb-4 ">Habilidades Digitales</h2>
            <p className="text-white font-thin mb-4">¡Potenciá tus habilidades digitales con nuestros programas! Ofrecemos orientación personalizada para ayudarte a planificar y avanzar en tu carrera tecnológica.</p>
            <p className="text-white font-thin">Aprendé sobre habilidades tecnológicas, ¡a tu propio ritmo! También te apoyamos en el desarrollo de tus propios proyectos tecnológicos.</p>
            <div className="hidden md:flex justify-center mt-4">
              <button className="bg-customGreen text-white px-16 py-2 mt-4  rounded-md">Ver cursos</button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className=" relative h-full w-full flex items-center justify-center">
            <button className="md:hidden absolute  bg-customGreen text-white px-16 py-2 rounded-md z-10">Ver cursos</button>
            <img src={image6} alt="image6" className="object-cover h-full w-full rounded-lg" />
          </div>
        </div>
      </div>

      {/* container de tutorias y habilidades */}
      <div className="bg-customDarkGreen p-8 flex justify-center items-center">
        {/* First Container */}
        <div className="w-full max-w-6xl flex flex-col-reverse md:grid md:grid-cols-2 gap-8 mb-1 border border-white rounded-lg p-6">
          {/* Left Image Section (appears at the bottom on mobile) */}
          <div className="relative rounded-lg overflow-hidden">
            {/* Button centered on the image */}
            <button className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-customGreen text-white px-8 py-2 rounded-md z-10">Inscribirme</button>
            <img src={image11} alt="image11" className="object-cover h-full w-full rounded-lg" />
          </div>

          {/* Right Text Section (appears at the top on mobile) */}
          <div className="rounded-lg">
            <h2 className="text-1xl text-white mb-4">Mentorías y Tutorías</h2>
            <p className="text-white font-thin mb-4">Con nuestras sesiones personalizadas nos enfocaremos en tus metas y pasiones, para que comiences tu emprendimiento con todas las herramientas necesarias y crees un negocio rentable.</p>
            <p className="text-white font-thin">Te ofrecemos guía y apoyo continuos de un mentor experimentado, que te ayudará a potenciar tus habilidades y hacer crecer tu proyecto.</p>
            <div className="hidden md:flex justify-center mt-4">
              <NavLink to="/mentorias-y-tutorias">
                <button className="bg-customGreen text-white px-16 py-2 mt-4 rounded-md">Inscribirme</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Banner secundario */}

      <div className="bg-customLightGreen w-full h-52 hidden md:block">
        <h2 className="text-2xl text-white text-center  pt-16 ">
          Con el correcto asesoramiento, podés transformar tu <br /> pasión en éxito. ¡Acá empieza tu camino!
        </h2>
      </div>

      {/* Mision y Vision container */}
      <div className="bg-customDarkGreen w-full h-auto">
        <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-8">
          {/* Mision */}
          <div className="order-1 md:order-none">
            <h2 className="text-2xl font-bold text-white text-center pt-8 md:pt-16">Misión</h2>
            <p className="text-white font-thin text-center">
              En Ventisnova queremos <br />
              potenciar cada talento, <br />
              sin importar su rubro, <br />
              para convertirlos en <br />
              negocios exitosos.
            </p>
          </div>

          {/* Image */}
          <div className="hidden md:flex justify-center pt-16  ">
            <div className="relative p-4 bg-gradient-to-b from-customGreen to-customDarkGreen rounded-full">
              <img src={maskgroup} alt="maskgroup" />
            </div>
          </div>

          {/* Vision */}
          <div className="order-2 md:order-none">
            <h2 className="text-2xl font-bold text-white text-center pt:8 md:pt-16">Visión</h2>
            <p className="text-white font-thin text-center">
              Aspiramos a una realidad en <br />
              la que emprender sea <br />
              sencillo y rentable, para que <br />
              cada quien pueda vivir <br />
              realmente de sus pasiones.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="flex flex-col justify-center items-center text-left px-4 max-w-sm mx-auto mt-16">
          <h1 className="text-2xl text-white font-bold mb-4">Valores</h1> {/* Larger heading and margin */}
          <div className="border-t border-gray-300 w-full mb-4"></div> {/* Full-width line with margin */}
          <p className="text-white text-md font-normal leading-relaxed mb-2">01. Empatía: Conectamos con tus experiencias, desafíos y sueños.</p>
          <p className="text-white text-md font-normal leading-relaxed mb-2">02. Innovación: Fomentamos el camino hacia nuevas y revolucionarias ideas.</p>
          <p className="text-white text-md font-normal leading-relaxed mb-2">03. Crecimiento Personal y Profesional: Nos enfocamos en tu crecimiento y potencialidad.</p>
          <p className="text-white text-md font-normal leading-relaxed mb-2">04. Pasión: Nos apasiona trabajar para generar una diferencia positiva en tus objetivos.</p>
          <p className="text-white text-md font-normal leading-relaxed mb-2">05. Colaboración: Te acompañamos en cada uno de los pasos hacia tus metas.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeView;
