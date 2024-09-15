const BlogView = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-2xl text-white">Blog</h2>
        <p className="text-lg text-white">Articulos</p>
      </div>
      {/* containers */}
      <div className=" flex flex-col justify-center">
        <div className="grid grid-cols-3 md:grid-cols-1 gap-4 width-[300px] h-[300px] ">
          <div className="bg-customDarkGreen p-8 border ">
            <img src="" alt="" />
            <h2 className="text-2xl text-white"></h2>

            <p className="text-lg text-white"></p>
            <button className="bg-lightGreen text-white font-semibold px-6 py-2 mt-4 rounded-md"></button>
          </div>
          <div className="bg-customDarkGreen p-8 border ">
            <img src="" alt="" />
            <h2 className="text-2xl text-white"></h2>

            <p className="text-lg text-white"></p>
            <button className="bg-lightGreen text-white font-semibold px-6 py-2 mt-4 rounded-md"></button>
          </div>
          <div className="bg-customDarkGreen p-8 border ">
            <img src="" alt="" />
            <h2 className="text-2xl text-white"></h2>

            <p className="text-lg text-white"></p>
            <button className="bg-lightGreen text-white font-semibold px-6 py-2 mt-4 rounded-md"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
