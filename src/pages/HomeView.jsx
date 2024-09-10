import image5 from '../assets/image 5.png';
import image6 from '../assets/image 6.png';

const HomeView = () => {
  return (
    <div>
      <div className="h-1/2  bg-custom-gradient       ">
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
            <button className="bg-white text-black font-semibold rounded-md px-6 py-4 mt-8">Inscribite ahora</button>
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
      <div className="bg-customDarkGreen w-full h-96">
        <div className="flex flex-col ">
          <h1 className="text-1xl text-white ">Habilidades Digitales</h1>
          <p className="text-white font-thin">¡Potenciá tus habilidades digitales con nuestros programas! Ofrecemos orientación personalizada para ayudarte a planificar y avanzar en tu carrera tecnológica.</p>
          <p className="text-white font-thin">Aprendé sobre habilidades tecnológicas, ¡a tu propio ritmo! También te apoyamos en el desarrollo de tus propios proyectos tecnológicos.</p>
          <button className="bg-customGreen text-white px-10 py-2 mt-4 rounded-md">Ver cursos</button>
        </div>
        <div className="">
          <img src={image6} alt="image6" />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
