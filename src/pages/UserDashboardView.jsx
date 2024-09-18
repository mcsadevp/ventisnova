import { useAuth } from "../context/AuthContext";
import UserDashboard from "../components/UserDashboard";
import Footer from "../components/Footer"

function UserDashboardView() {
  const auth = useAuth();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <UserDashboard auth={auth} />
      <Footer/>
    </div>
  );
}

export default UserDashboardView;
