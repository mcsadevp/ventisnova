import image19 from '../assets/image 19.png';

import { useState } from 'react';

const BlogView = () => {
  //track current page
  const [currentPage, setCurrentPage] = useState(1);

  //Function to handle page click
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col  items-center justify-center ">
      <div className="text-center mb-8">
        <h2 className="text-2xl text-white">Blog</h2>
        <p className="text-lg text-white">Articulos</p>
      </div>

      {/* search tags on the top right */}
<div className="flex space-x-4 ">
  <span className='bg-customGreen text-white px-4 py-1 rounded-full text-sm'>Diseño</span>
  <span className='bg-customGreen text-white px-4 py-1 rounded-full text-sm'>Programación</span>
  <span className='bg-customGreen text-white px-4 py-1 rounded-full text-sm'>IA</span>
  <span className='bg-customGreen text-white px-4 py-1 rounded-full text-sm'>Tecnología</span>
</div>






      {/* containers */}
      <div className="space-y-8 w-full max-w-3xl ">
        {/* Container 1 */}
        <div className=" flex flex-col md:flex-row items-center justify-between bg-customDarkGreen  border rounded-lg  md:items-start ">
          <img src={image19} alt="" className="w-full  md:w-1/2 mb-4 md:mb-0 " />
          <div className="ml-8 md:ml-0 pl-2 pt-2 ">
            <h2 className="text-1xl text-white mt-2">La tecnologia puede simplificar nuestra vida y ayudarnos a cumplir nuestros sueños</h2>

            <p className="text-md font-thin text-white pt-2 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis neque quidem assumenda ipsam necessitatibus obcaecati eius nulla inventore voluptas, cum impedit consequatur, ipsa, id voluptates explicabo corrupti recusandae? Voluptas?</p>
            <button className="bg-customGreen text-white px-16 py-2 mt-8 rounded-md">Ver articulo</button>
          </div>
        </div>

        {/* Container 2 */}
        <div className=" flex flex-col md:flex-row-reverse items-center justify-between bg-customDarkGreen  border rounded-lg  md:items-start ">
          <img src={image19} alt="" className="w-full md:w-1/2 mb-4 md:mb-0 " />
          <div className="ml-8 md:ml-0 pl-2 pt-2 ">
            <h2 className="text-1xl text-white pt-2 mt-2">La tecnologia puede simplificar nuestra vida y ayudarnos a cumplir nuestros sueños</h2>

            <p className="text-md font-thin text-white pt-2 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis neque quidem assumenda ipsam necessitatibus obcaecati eius nulla inventore voluptas, cum impedit consequatur, ipsa, id voluptates explicabo corrupti recusandae? Voluptas?</p>
            <button className="bg-customGreen text-white px-16 py-2 mt-8 rounded-md">Ver articulo</button>
          </div>
        </div>

        {/* container 3 */}
        <div className=" flex flex-col md:flex-row items-center justify-between bg-customDarkGreen  border rounded-lg  md:items-start ">
          <img src={image19} alt="" className="w-full  md:w-1/2 mb-4 md:mb-0 " />
          <div className="ml-8 md:ml-0 pl-2 pt-2 ">
            <h2 className="text-1xl text-white mt-2">La tecnologia puede simplificar nuestra vida y ayudarnos a cumplir nuestros sueños</h2>

            <p className="text-md font-thin text-white pt-2 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis neque quidem assumenda ipsam necessitatibus obcaecati eius nulla inventore voluptas, cum impedit consequatur, ipsa, id voluptates explicabo corrupti recusandae? Voluptas?</p>
            <button className="bg-customGreen text-white px-16 py-2 mt-8 rounded-md">Ver articulo</button>
          </div>
        </div>
      </div>

      {/* Pagination at the bottom */}
      <div className="mt-8 flex space-x-4">
        {[1, 2, 3, 4].map((page) => (
          <button key={page} onClick={() => handlePageClick(page)} className={`px-4 py-2 rounded-md ${currentPage === page ? 'bg-customGreen text-white' : 'bg-transparent text-white'}`}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogView;
