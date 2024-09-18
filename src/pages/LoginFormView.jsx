import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";
import backgroundImage from "../assets/page-login.png";
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
        <LoginForm auth={auth} />
      </div>
  );
}

export default LoginFormView;