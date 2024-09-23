import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import image14 from '../assets/image 14.png'
import semiCirculos from '../assets/semi-circulo.jpeg';
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import FAQ from '../components/FAQ';
import { useNavigate } from 'react-router-dom';
import FloatButtonWhatsapp from '../components/FloatButtonWhatsapp';

const faqData = [
  {
    question: '¿Cómo es la modalidad de cursada?',
    answer: 'Las clases se dictan de forma online y en vivo con tu tutor/mentor. Se conformarán por pequeños grupos de estudiantes.'
  },
  {
    question: '¿Cuáles son los medios de pagos?',
    answer: ' Podés abonar tu curso en efectivo, a través de transferencia bancaria o en plazos de pago.'
  },
  {
    question: '¿Necesito conocimiento previo para inscribirme?',
    answer: '¡No es necesario! En nuestros cursos comenzarás desde cero y te brindaremos todas las herramientas y conocimiento necesario para llevar a cabo tu proyecto. ¡Solo necesitás una idea y pasión por ella!'
  },
  {
    question: '¿Puedo obtener una certificación al finalizar el curso?',
    answer: '¡Si! Cuando finalices el curso, no solo te llevarás un proyecto totalmente rentable, si no un certificado por todo el esfuerzo y conocimiento adquirido.'
  },
  {
    question: '¿Qué tipo de materiales de apoyo ofrecen?',
    answer: 'Además de los encuentros online, vas a disponer de todo el material utilizado en las clases, así como recomendaciones de lectura alternativa.'
  },
]

const MentoriasView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  // Mueve el scroll a la parte superior
  }, [])
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact', { state: { mensaje: "Quiero inscribirme en el curso Mentorías" } });
  };

  return (
    <div>
      {/* Hero & navbar*/}
      <div className='bg-cover' style={{ backgroundImage: `url(${ semiCirculos })` }}>
        <Navbar />
        <div className=' w-full py-20 px-24'>
          <h1 className='text-white md:text-5xl text-3xl font-bold '>MENTORÍAS</h1>
          <ul className='mt-8 space-y-2 list-disc text-white md:pl-5 pl-3'>
            <li className='md:max-w-[750px]'>Guía y apoyo continuo de un tu mentor experimentado para el desarrollo de tus proyectos, toma de desiciones y crecimiento profesional.</li>
            <li>Teórico-práctico.</li>
            <li>Duración: 11 semanas</li>
            <div className='flex items-center'>
              <li>Online en vivo</li>

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
      {/* Description & image section */}
      <div className="relative bg-customDarkGreen">
        {/* Contenedor principal con diseño de columna en móviles y fila en pantallas más grandes */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start h-full">
          {/* Imagen de fondo */}
          <div className="absolute inset-0 w-full h-full ">
            <img
              src={image14}
              alt="Video conferencia"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenedor de texto */}
          <div className="relative md:w-[530px] z-10 bg-custom-gradient-dos p-10 rounded-lg md:ml-auto md:static md:max-h-[380px] mt-12 md:mr-24 mb-10 mx-4">
            <h2 className="text-3xl mb-4 text-white">Descripción</h2>
            <p className="mb-4 text-white">
              Esta mentoría está diseñada para emprendedores que buscan transformar sus ideas y pasiones en proyectos rentables. A través del asesoramiento de tu mentor y ejercicios prácticos y aplicables, recibirás <span className='text-customGreen'>orientación personalizada</span> para llevar tu visión al siguiente nivel. Desde la conceptualización hasta tu primer trabajo, <span className='text-customGreen'>te acompañaremos en cada paso del camino</span>, brindándote herramientas y estrategias para convertir tu idea en un <span className='text-customGreen'>negocio exitoso</span>. ¡Da el salto y comenzá a construir lo que siempre soñaste!
            </p>
          </div>
        </div>
      </div>
      {/* Caracteristicas */}
      <div className='container mx-auto w-[380px] md:w-[850px] md:h-[306px] bg-custom-gradient-black p-10 text-white flex flex-col mt-20 rounded'>
        <h1 className='text-3xl'>Características</h1>
        <ul className='mt-8 space-y-8 list-disc text-white md:pl-5 pl-3'>
          <li>Orientación profesional: Consejos y ejercicios para poder potenciar el proyecto que te apasiona y volverlo viable. </li>
          <li>Creación de proyecto: Te ayudamos a crear tu proyecto de negocio desde cero. No importa si es una idea de producto, emprendimiento o servicio.</li>
          <li>Acompañamiento constante: Tu mentor te acompañará, no solo en tu aprendizaje, si no en la ejecución de cada uno de los pasos, hasta conseguir tus primeros clientes.</li>
        </ul>
      </div>
      {/* Detalles del curso */}
      <div className='md:mx-0 mx-4'>
        <div className='container mx-auto md:w-[850px] h-auto border-2 border-customGreen mt-14 rounded text-white p-8'>
          <h1 className='text-3xl mb-2'>Detalles del curso</h1>
          <p className='text-lg mb-4'>5 encuentros online en vivo de 2hs</p>

          <div className='grid md:grid-cols-2 gap-8 mb-6 px-4'>
            {/* Columna izquierda */}
            <div>
              <div className='flex items-center mb-2'>
                <p className='text-customGreen font-bold'>Días</p>
                <IoCalendarClearOutline size={22} className='text-customGreen ml-2' />
              </div>
              <p>Miércoles</p>

              {/* Contenedor flex para Inicio y Fin */}
              <div className='flex justify-between mt-4'>
                {/* Inicio */}
                <div>
                  <p className='text-customGreen font-bold'>Inicio</p>
                  <p>25 de septiembre</p>
                  <div className='flex items-center mt-4'>
                    <p className='text-customGreen font-bold'>Horarios</p>
                    <FaRegClock size={22} className='text-customGreen ml-2' />
                  </div>
                  <p>19:00 a 21:00hs</p>
                </div>
                {/* Fin */}
                <div className='ml-8'>
                  <p className='text-customGreen font-bold'>Fin</p>
                  <p>23 de octubre</p>
                </div>
              </div>
            </div>

            {/* Columna derecha */}
            <div>
              <div className='mb-3'>
                <p className='text-customGreen font-bold'>Plan estándar</p>
                <p className='text-sm font-semibold'>Plan estándar USD 300</p>
              </div>

              <div>
                <p>Grabación de las clases en vivo</p>
                <p>Profesores y adjuntos disponibles.</p>
              </div>
            </div>
          </div>

          <button onClick={() => window.location.href = 'https://wa.me/5491166850200?text=Hola%20me%20gustaría%20saber%20más%20información%20sobre%20las%20mentorías.'} className='bg-customGreen hover:bg-emerald-500 text-black font-bold py-2 md:px-20 px-12 rounded-full flex justify-center items-center mx-auto transition-all'>
            Reserva tu lugar
            <FaWhatsapp size={22} className='ml-2' />
          </button>
        </div>
      </div>
      {/* Beneficios */}
      <div className='mx-4 md:mx-0'>
        <div className='container mx-auto md:w-[850px] bg-custom-gradient-dos p-10 text-white flex flex-col mt-10 mb-5 rounded'>
          <h1 className='text-3xl'>Beneficios</h1>
          <ul className='mt-8 space-y-8 list-disc text-white md:pl-5 pl-3'>
            <li>Encuentros pensados exclusivamente para tu idea de negocio. </li>
            <li>Apoyo y acompañamiento constante por parte de tu mentor.</li>
            <li>Herramientas adaptadas a las necesidades de tu proyecto.</li>
          </ul>
        </div>
      </div>
      {/* Preguntas frecuentes */}
      <div className='mt-12 mx-4 md:mx-0 mb-4'>
        <FAQ data={faqData} />
      </div>
      <Footer />
    </div>
  )
}

export default MentoriasView