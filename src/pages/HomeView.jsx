import image5 from '../assets/image 5.png';
import image6 from '../assets/image 6.png';
import image11 from '../assets/image 11.png';

const HomeView = () => {
  return (
    <div>
      <div className="h-1/2  bg-custom-gradient ">
        <nav className="flex justify-between items-center p-6">{/* Navigation can go here if needed */}</nav>

        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-32 py-12">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold text-white leading-tight">
              Potencia tus habilidades, <br /> simplifica tu mundo.
            </h2>
            <p className="text-white text-lg mt-6">La tecnologia es una herramienta poderosa.</p>
            <p className="text-white font-thin">
              En VentisNova, te ayudamos a descubrir como utilizarla para <br /> transformar tu vida y alcanzar tus sueños.
            </p>

            <button className="bg-white text-black font-semibold rounded-md px-6 py-4 mt-8 ">Inscribite ahora</button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative">
              <div
                className="absolute -z-10 w-80 h-80 rounded-full -right-12 -top-12"
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 162, 116, 1), rgba(23, 72, 57, 0))',
                }}
              ></div>
              <img src={image5} alt="Person with laptop" className="h-auto max-w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* register container */}

      <div className="bg-white w-full h-60">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-2xl font-semibold text-black">Unite a nuestra comunidad online</h1>
          <button className="bg-customGreen text-black font-semibold px-6 py-2 mt-4 rounded-md">Registrate</button>
          <p className="text-black mt-4">Si ya estas registrado, iniciá sesion</p>
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
            <div className="flex justify-center mt-4">
              <button className="bg-customGreen text-white px-16 py-2 mt-4  rounded-md">Ver cursos</button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="h-full w-full flex items-center justify-center">
            <img src={image6} alt="image6" className="object-cover h-full w-full rounded-lg" />
          </div>
        </div>
      </div>

      {/* container de tutorias y habilidades */}
      <div className="bg-customDarkGreen  p-8 flex justify-center items-center ">
        {/* First Container */}
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 mb-1 border border-white  rounded-lg p-6">
          {/* left Image Section */}
          <div className="rounded-lg overflow-hidden">
            <img src={image11} alt="image11" className="object-cover h-full w-full rounded-lg" />
          </div>
          {/* Right Text Section */}
          <div className=" rounded-lg">
            <h2 className="text-1xl text-white mb-4 ">Habilidades Digitales</h2>
            <p className="text-white font-thin mb-4">Con nuestras sesiones personalizadas nos enfocaremos en tus metas y pasiones, para que comiences tu emprendimiento con todas las herramientas necesarias y crees un negocio rentable.</p>
            <p className="text-white font-thin">Te ofrecemos guía y apoyo continuos de un mentor experimentado, que te ayudará a potenciar tus habilidades y hacer crecer tu proyecto. </p>
            <div className="flex justify-center mt-4">
              <button className="bg-customGreen text-white px-16 py-2 mt-4  rounded-md">Inscribirme</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
