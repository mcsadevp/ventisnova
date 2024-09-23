import BlogList from "../components/BlogList"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const BlogView = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="mt-20">
        <Navbar />
        <div className="w-full h-36 text-center bg-gradient-to-b from-[#174839] to-[#44A385] md:pt-10 pt-3">
          <h2 className="text-2xl font-semibold text-white leading-tight mt-5  md:text-center">
          Blog
        </h2>
        </div>
      </div>
      <BlogList />
      <Footer />
    </div>
  )
}

export default BlogView