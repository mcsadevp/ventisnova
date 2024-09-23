import BlogPost from "../components/BlogPost"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const NoticiaView = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="mt-20">
        <Navbar />
      </div>
      <BlogPost />
      <Footer />
    </div>
  )
}
  
  export default NoticiaView