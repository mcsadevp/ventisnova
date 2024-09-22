import { useAuth } from "../context/AuthContext";
import UserDashboard from "../components/UserDashboard";
import Footer from "../components/Footer"
import FloatingButton from "../components/FloatingButton";

function UserDashboardView() {
  const auth = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <UserDashboard auth={auth} />
       {isAdmin && <FloatingButton path="/admin/configuracion" />}
      <Footer/>
    </div>
  );
}

export default UserDashboardView;
