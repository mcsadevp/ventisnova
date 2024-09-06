import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    <h1 className='text-3xl font-poppins text-white text-center'>Hello</h1>
    
    
    </div>
  )
}

export default App
