import React from "react";
import useAuth from "../hooks/useAuth";
import LogoutButton from "../components/LogoutButton";

const AdminDashboard = () => {
  const { user, role, loading } = useAuth("admin");

  if (loading) return <p>Loading...</p>;

  if (!user || role !== "admin") return null;
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome Admin Here you can manage tasks and monitor members</p>
      <LogoutButton />
    </div>
  );
};

export default AdminDashboard;
