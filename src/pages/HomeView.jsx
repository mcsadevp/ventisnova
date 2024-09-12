import image5 from '../assets/image 5.png';
import image6 from '../assets/image 6.png';
import image11 from '../assets/image 11.png';
import maskgroup from '../assets/Mask group.png';

const HomeView = () => {
  return (
    <div>
      <div className="h-1/2  bg-custom-gradient ">
        <nav className="flex justify-between items-center p-6">{/* Navigation can go here if needed */}</nav>

        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-32 py-12">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold text-white leading-tight">
              ¡No dejes que la falta <br /> de experiencia te detenga!
            </h2>
            <p className="text-white text-lg mt-6">La tecnologia es una herramienta poderosa.</p>
            <p className="text-white font-thin">
              El camino hacia tu emprendimiento soñado <br />
              empieza acá.
            </p>

            <button className="bg-white text-black font-semibold rounded-md px-6 py-4 mt-8 ">Potenciate ahora</button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative p-4  rounded-full">
              <div className="absolute inset-0 border-8  border-customGreen rounded-full "> </div>
              <img src={image5} alt="Person with laptop" className="relative z-10 h-auto max-w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* register container */}

      <div className="bg-white w-full h-60">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-2xl font-semibold text-black">Unite a nuestra comunidad de emprendedores.</h1>
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

      {/* Banner secundario */}

      <div className="bg-customLightGreen w-full h-52">
        <h2 className="text-2xl text-white text-center  pt-16 ">
          Con el correcto asesoramiento, podés transformar tu <br /> pasión en éxito. ¡Acá empieza tu camino!
        </h2>
      </div>

      {/* Mision y Vision container */}
      <div className="bg-customDarkGreen w-full h-[800px]">
        <div className="grid grid-cols-3 items-center gap-1 ">
          {/* Mision */}
          <div className="">
            <h2 className="text-2xl text-white text-center pt-16">Misión</h2>
            <p className="text-white font-thin text-center">
              En Ventisnova queremos <br />
              potenciar cada talento, <br />
              sin importar su rubro, <br />
              para convertirlos en <br />
              negocios exitosos.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center pt-16  ">
            <div className="relative p-4 bg-gradient-to-b from-customGreen to-customDarkGreen rounded-full">
              <img src={maskgroup} alt="" />
            </div>
          </div>

          {/* Vision */}
          <div className="">
            <h2 className="text-2xl text-white text-center pt-16">Visión</h2>
            <p className="text-white font-thin text-center">
              Aspiramos a una realidad en <br />
              la que emprender sea <br />
              sencillo y rentable, para que <br />
              cada quien pueda vivir <br />
              realmente de sus pasiones.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-28 ">
          <h1 className="text-2xl text-white text-center ">Valores</h1>
          <div className="border-t border-gray-300 w-[600px] pl-44"></div>
          <p className="text-white font-thin text-md mt-4">01. Empatía: Conectamos con tus experiencias, desafíos y sueños..</p>
          <p className="text-white font-thin text-md mt-4">02. Innovación: Fomentamos el camino hacia nuevas y revolucionarias ideas.</p>
          <p className="text-white font-thin text-md mt-4">03. Crecimiento Personal y Profesional: Nos enfocamos en tu crecimiento y potencialidad.</p>
          <p className="text-white font-thin text-md mt-4">04. Pasión: Nos apasiona trabajar para generar una diferencia positiva en tus objetivos.</p>
          <p className="text-white font-thin text-md mt-4">05. Colaboración: Te acompañamos en cada uno de los pasos hacia tus metas..</p>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
