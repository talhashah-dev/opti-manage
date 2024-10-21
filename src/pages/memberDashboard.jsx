import React from "react";
import useAuth from "../hooks/useAuth";
import LogoutButton from "../components/LogoutButton";

const MemberDashboard = () => {
  const { user, role, loading } = useAuth("member");

  if (loading) return <p>Loading...</p>;

  if (!user || role !== "member") return null;

  return (
    <div>
      <h1>Member Dashboard</h1>
      <p>Welcome, Member! Here are your tasks.</p>
      <LogoutButton />
    </div>
  );
};

export default MemberDashboard;
