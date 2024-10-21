import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const role = docSnap.data().role;

        if (role === "admin") {
          router.push("/adminDashboard");
        } else {
          router.push("/memberDashboard");
        }
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Layout title="Login">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Login to Your Account</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-400 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-indigo-600 hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
