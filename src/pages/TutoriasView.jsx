import { IoCalendarClearOutline } from "react-icons/io5"
import Navbar from "../components/Navbar"
import { FaRegClock, FaWhatsapp } from "react-icons/fa"
import image15 from "../assets/image 15.png"
import semiCirculos from '../assets/semi-circulo.jpeg';
import FAQ from "../components/FAQ"
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react'
import Footer from "../components/Footer";
import FloatButtonWhatsapp from "../components/FloatButtonWhatsapp";

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

const TutoriasView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  // Mueve el scroll a la parte superior
  }, [])
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/contact', { state: { mensaje: "Quiero inscribirme en las Tutorías" } });
  };



  return (
    <div>
      {/* Hero & nabvar*/}
      <div className='bg-cover' style={{ backgroundImage: `url(${ semiCirculos })` }}>
        <Navbar />
        <div className=' w-full py-20 px-24'>
          <h1 className='text-white md:text-5xl text-3xl font-bold '>TUTORÍAS</h1>
          <ul className='mt-8 space-y-2 list-disc text-white md:pl-5 pl-3'>
            <li className='md:max-w-[750px]'>Guía y apoyo continuo de un tu mentor experimentado para el desarrollo de tus proyectos, toma de desiciones y crecimiento profesional.</li>
            <li>Teórico.</li>
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
              src={image15}
              alt="Video conferencia"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenedor de texto */}
          <div className="relative md:w-[530px] z-10 bg-custom-gradient-dos p-10 rounded-lg md:ml-auto md:static md:max-h-[380px] mt-12 md:mr-24 mb-10 mx-4">
            <h2 className="text-3xl mb-4 text-white">Descripción</h2>
            <p className="mb-4 text-white">
              La Tutoría está diseñada para quienes desean aprender a convertir sus ideas en negocios exitosos sin necesidad de experiencia previa. A través de <span className="text-customGreen">clases teóricas en vivo</span>, conocerás las estrategias esenciales para desarrollar tu proyecto, desde la planificación y creación del modelo de negocio hasta su correcta ejecución. Descubí los pasos clave para <span className="text-customGreen">identificar oportunidades, gestionar recursos y enfrentar los desafíos</span> del emprendimiento. ¡Es el momento de preparar tu idea y potenciarla!
            </p>
          </div>
        </div>
      </div>
      {/* Caracteristicas */}
      <div className='container mx-auto w-[380px] md:w-[850px] md:h-[306px] bg-custom-gradient-black p-10 text-white flex flex-col mt-20 rounded'>
        <h1 className='text-3xl'>Características</h1>
        <ul className='mt-8 space-y-8 list-disc text-white md:pl-5 pl-3'>
          <li>ABC del negocio: Aprendé como poder ejecutar un proyecto de negocio desde cero y aplicalo a tus ideas.</li>
          <li>Plan de estudio personalizado: Nos encargamos de brindarte contenido adaptado a tus ideas y objetivos.</li>
          <li>Apoyo constante: Vas a contar con tu tutor para realizar consultas fuera de las clases, cuando sea necesario.</li>
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
                <p className='text-sm font-semibold'>Plan estándar USD 200</p>
              </div>

              <div>
                <p>Grabación de las clases en vivo</p>
                <p>Profesores y adjuntos disponibles.</p>
              </div>
            </div>
          </div>

          <button onClick={() => window.location.href = 'https://wa.me/5491166850200?text=Hola%20me%20gustaría%20saber%20más%20información%20sobre%20las%20tutorías.'} className='bg-customGreen hover:bg-emerald-500 text-black font-bold py-2 md:px-20 px-12 rounded-full flex justify-center items-center mx-auto transition-all'>
            Reserva tu lugar
            <FaWhatsapp size={22} className='ml-2' />
          </button>
        </div>
      </div>
      {/* Beneficios */}
      <div className="mx-4 md:mx-0">
        <div className='container mx-auto md:w-[850px]  bg-custom-gradient-dos p-10 text-white flex flex-col mt-10 mb-5 rounded'>
          <h1 className='text-3xl'>Beneficios</h1>
          <ul className='mt-8 space-y-8 list-disc text-white md:pl-5 pl-3'>
            <li>Aprendizaje enfocado y eficiente.</li>
            <li>Atención personalizada para resolver dudas y profundizar em temas específicos.</li>
            <li>Flexibilidad para aprender a tu propio ritmo y según tu disponibilidad.</li>
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

export default TutoriasView