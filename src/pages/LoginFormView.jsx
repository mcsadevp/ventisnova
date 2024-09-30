import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";
import backgroundImage from "../assets/bg-form6.jpg";
import Navbar from "../components/Navbar"; 

function LoginFormView() {
  const auth = useAuth();
  return (
    <div 
      className={`h-screen flex flex-col flex-1 bg-center bg-no-repeat`} 
      style={{ 
        backgroundImage: `url(${backgroundImage})`,  
        backgroundSize: 'cover'
      }}
    >
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        <div> 
          <LoginForm auth={auth} />
        </div>
      </div>
    </div>
  );
}

export default LoginFormView;
