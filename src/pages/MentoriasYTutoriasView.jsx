import image10 from '../assets/image 10.png';
import campaingCreators from '../assets/campaign-creators-qCi_MzVODoU-unsplash 1.png';
import image13 from '../assets/image 13.png';
import ondasFondo from '../assets/onda2.png';
import semiCirculos from '../assets/semi-circulo.jpeg';
import { Link } from 'react-router-dom';
import { IoChatbubblesOutline, IoPersonOutline } from 'react-icons/io5';
import FAQ from '../components/FAQ';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react'
import Footer from '../components/Footer';


const faqData = [
  {
    question: '¿Cómo es la modalidad de cursada?',
    answer: 'Las clases se dictan de forma online y en vivo con tu tutor/mentor. Se conformarán por pequeños grupos de estudiantes.'
  },
  {
    question: '¿Cuáles son los medios de pagos?',
    answer: 'Podés abonar tu curso en efectivo, a través de transferencia bancaria o en plazos de pago.'
  },
  {
    question: '¿Necesito conocimiento previo para inscribirme?',
    answer: '¡No es necesario! En nuestros cursos comenzarás desde cero y te brindaremos todas las herramientas y conocimientos necesarios para llevar a cabo tu proyecto. ¡Solo necesitás una idea y pasión por ella!'
  },
  {
    question: '¿Puedo obtener una certificación al finalizar el curso?',
    answer: '¡Sí! Cuando finalices el curso, no solo te llevarás un proyecto totalmente rentable, sino un certificado por todo el esfuerzo y conocimiento adquirido.'
  },
  {
    question: '¿Qué tipo de materiales de apoyo ofrecen?',
    answer: 'Además de los encuentros online, vas a disponer de todo el material utilizado en las clases, así como recomendaciones de lectura alternativa.'
  },
];

const MentoriasYTutoriasView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  // Mueve el scroll a la parte superior
  }, [])
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact', { state: { mensaje: "Quiero inscribirme en el curso Mentorías" } });
  };

  return (
    <div className='flex flex-col w-full'>
      <div className='bg-cover' style={{ backgroundImage: `url(${ semiCirculos }) `}}>
        <Navbar />
        <div className='w-full py-24 px-24 md:max-h-[600px]'>
          <h1 className='text-white md:text-5xl text-3xl font-bold md:max-w-[400px]'>MENTORÍAS Y TUTORÍAS</h1>
          <ul className='mt-8 space-y-2 list-disc text-white md:pl-5 pl-3'>
            <li>Sesiones adaptadas a tu idea de negocios, para convertirla en un proyecto totalmente ejecutable y estable a largo plazo.</li>
            <li>Guía y apoyo continuo por parte de tu mentor experimentado en cada uno de los pasos hacia tus objetivos.</li>
            <li>¡Aplicable a cualquier tipo de idea de producto, emprendimiento o servicio que desees brindar!</li>
            <div className='flex items-center'>
              <li>Sesiones online en vivo</li>
              <div className='w-4 h-4 bg-red-300 rounded-full flex justify-center items-center ml-1'>
                <div className='w-2 h-2 bg-red-600 rounded-full'></div>
              </div>
            </div>
          </ul>
          <button 
        onClick={handleNavigation} 
        className='mt-6 md:mt-6 py-4 px-6 bg-white rounded-md hover:bg-customGreen hover:text-white transition-all font-semibold'
      >
        ¡Inscribite ahora!
      </button>
        </div>
        
      </div>

     

      <div className='w-full mx-auto flex flex-col md:flex-row relative'>
          {/* Imagen */}
          <div className="flex items-center justify-center md:w-auto w-full h-full md:h-auto absolute md:relative">
              <img
                  src={image13}
                  alt="Grupo de estudiantes"
                  className="w-full h-full object-cover md:object-contain"
              />
          </div>
          
          {/* Texto */}
          <div className="relative md:w-1/2 z-10 p-6 bg-black bg-opacity-50 md:bg-opacity-0 text-white flex flex-col items-start justify-center">
              <p className='lg:text-xl text-md'>¡El aprendizaje grupal ha demostrado ser más <span className='text-customGreen'>eficaz y </span><span className='text-customGreen'>motivador</span>! Al interactuar con tus compañeros de clase, tendrás la oportunidad de explorar nuevas ideas y potenciar tus proyectos.</p>
              <ul className='list-disc space-y-2 mt-8 md:pl-4 px-5 lg:text-xl text-md'>
                  <li>Clases grupales.</li>
                  <li>Canales de chat abiertos y consultas.</li>
              </ul>
          </div>
        </div>

      <div className='w-full h-[188px] bg-white flex justify-center items-center flex-col'>
        <h1 className='text-xl font-semibold text-center'>Unite a nuestra comunidad de emprendedores</h1>
        <Link to="/register">
          <button className='bg-customGreen font-semibold px-6 py-2 my-4 rounded-md'>Registrate</button>
        </Link>
        <p className='text-sm'>Si ya estás registrado, <Link to="/perfil"><span className='underline text-sm cursor-pointer'>iniciá sesión</span></Link></p>
      </div>

        <div className='relative'> {/* ondas */}
          <div className='lg:h-[500px] lg:w-[1000px] absolute top-0 left-0 -z-10 hidden lg:block' style={{ backgroundImage:`url(${ondasFondo})`, backgroundSize: 'countain', backgroundPosition: 'center' }}>

          </div>
          <div className="flex justify-center mt-12">
            <div className="container mx-auto">
              {/* Texto encima de las cards */}
              <div className=" mb-6">
                <h2 className="text-2xl font-bold text-white ml-3 md:ml-0">¡Elegí tu curso ideal!</h2>
              </div>

              {/* Grid de cards y texto */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {/* Contenedor de las cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-8 px-4 md:px-0">
                  {/* Primera card */}
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-customGreen">
                    <img 
                      src={campaingCreators}
                      alt="Imagen card 1" 
                      className="w-full h-40 object-cover" 
                    />
                    <div className="p-4">
                      <div className='flex justify-between'>
                        <h3 className="text-lg font-semibold mb-2">Mentorías</h3>
                        <IoPersonOutline size={35} className='-mt-2'/>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm">Transformá tus ideas en proyectos rentables con la guía de un experto. Recibí acompañamiento en cada paso, desde la creación de tu negocio hasta el cierre de contratos con clientes. ¡Llevá tu visión a la acción y construí tu futuro!</p>
                      <div className='flex items-center mb-1'>
                        <p className='text-sm font-semibold'>Online en vivo</p>
                        <div className='w-4 h-4 bg-red-300 rounded-full flex justify-center items-center ml-1'>
                          <div className='w-2 h-2 bg-red-600 rounded-full'></div>
                        </div>
                      </div>
                      <p className='text-sm font-semibold'>Plan estándar</p>
                      <p className='font-semibold mb-3 text-xl'>USD 300</p>              
                      <div className="mt-auto">
                        <Link to={"/mentorias"} className="bg-customGreen px-4 py-2 rounded flex mx-auto w-full justify-center">
                            Ver curso
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Segunda card */}
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-customGreen">
                    <img 
                      src={image10}
                      alt="Imagen card 2" 
                      className="w-full h-40 object-cover" 
                    />
                    <div className="p-4">
                      <div className='flex justify-between'>
                        <h3 className="text-lg font-semibold mb-2">Tutorías</h3>
                        <IoChatbubblesOutline size={ 35 } className="-mt-2"/>
                      </div>
                      <p className="text-gray-600 mb-2 text-sm">Aprendé a transformar oportunidades en proyectos rentables a través de clases teóricas dadas. Descubrí estrategias claves para desarrollar tu negocio, desde la planificación hasta la ejecución. ¡Preparate para llevar tus ideas al siguiente nivel!</p>
                      <div className='flex items-center mb-1'>
                        <p className='text-sm font-semibold'>Online en vivo</p>
                        <div className='w-4 h-4 bg-red-300 rounded-full flex justify-center items-center ml-1'>
                          <div className='w-2 h-2 bg-red-600 rounded-full'></div>
                        </div>
                      </div>
                      <p className='text-sm font-semibold'>Plan estándar</p>
                      <p className='font-semibold mb-4 text-xl'>USD 200</p>              
                      <div className="mt-auto">
                        <Link to={"/tutorias"} className="bg-customGreen px-4 py-2 rounded flex mx-auto w-full justify-center" >
                            Ver curso
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Texto a la derecha de las cards */}
                <div className=" text-white p-4 md:p-14 rounded-lg md:w-[480px] md:mt-16">
                  <h2 className="text-2xl font-semibold mb-4">¿Necesitás ayuda para llevar a tierra tus ideas de negocio?</h2>
                  <p className='text-lg'>Ya sea que busques aprender las bases o recibir acompañamiento personalizado, tenemos el curso para vos. Nuestra <span className='text-[#10A274]'>Tutoría</span> te brindará el conocimiento necesario, y la <span className='text-[#10A274]'>Mentoría</span> te llevará de la mano hasta hacer realidad tu proyecto. ¡No esperes más, hacé realidad tus ideas!</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      {/* Preguntas frecuentes */}
      <div className='mt-12 mx-4 md:mx-0 mb-4'>
        <FAQ data={faqData} />
      </div>
      <Footer />
    </div>
  );
};

export default MentoriasYTutoriasView;