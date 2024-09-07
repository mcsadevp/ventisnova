import React from "react";

function UserDashboard({ auth }) {
  const handleLogout = () => {
    auth.logout();
  };

  return (
    <div className="dashboard">
      {auth.user?.displayName && <h5>Welcome: {auth.user.displayName}</h5>}
      <button onClick={handleLogout} className="button">Logout</button>
    </div>
  );
}

export default UserDashboard;
