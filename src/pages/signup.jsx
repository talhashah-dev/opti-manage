// pages/signup.js

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("member");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: role,
      });

    
      if (role === "admin") {
        router.push("/adminDashboard"); 
      } else {
        router.push("/memberDashboard"); 
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-black"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-black"
          />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} className="text-black">
            <option value="member">Member</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
