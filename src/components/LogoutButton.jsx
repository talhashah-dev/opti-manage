import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";

const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = async () => {
      try {
        await signOut(auth);
        router.push("/login"); 
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };
  
    return (
      <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
