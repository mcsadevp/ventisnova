import React from "react";
import { useAuth } from "../context/AuthContext";
import UserDashboard from "../components/UserDashboard";

function UserDashboardView() {
  const auth = useAuth();

  return (
    <div className="dashboard-view">
      <UserDashboard auth={auth} />
    </div>
  );
}

export default UserDashboardView;
