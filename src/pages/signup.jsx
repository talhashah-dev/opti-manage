import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { FcGoogle } from "react-icons/fc";
import { RiGoogleFill } from "react-icons/ri";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("development");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("member");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [iconColored, setIconColored] = useState(false);

  const handleGoogleLogin = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        const user = result.user;
        router.push("/memberDashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        name: name,
        department: department,
        role: role,
      });

      if (role === "admin") {
        router.push("/adminDashboard");
      } else {
        router.push("/memberDashboard");
      }
    } catch (error) {
      setLoading(false);
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("User with this Email already exist!");
          break;
        case "auth/weak-password":
          setError("Password should be at least 8 characters!");
          break;
        case "auth/too-many-requests":
          setError(
            "Account temporarily disabled due to multiple failed login attempts."
          );
          break;
        default:
          setError("An unexpected error occurred. Please try again.");
          break;
      }
    }
  };

  return (
    <>
      <Head>
        <title>Opti Manage | Sign Up</title>
      </Head>

      <div className="text-black p-2 fixed mt-5 mx-5 hover:rounded-full hover:bg-indigo-500 hover:text-white">
        <Link href="/">
          <ArrowLeftIcon height={30} width={30} />
        </Link>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 max-w-md w-full">
          <span className="w-full flex justify-center mb-3">
            <Image src="/images/logo.png" width={80} height={80} alt="Logo" />
          </span>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Create Your Account
          </h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSignup} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-black "
              required
            />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-black "
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-black"
              required
              minLength={8}
            />
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-black"
            >
              <option value="development">Development</option>
              <option value="testing">Testing</option>
              <option value="humanResources">Human Resources</option>
            </select>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-black"
            >
              <option value="member">Member</option>
              <option value="admin">Admin</option>
            </select>
            <button
              type="submit"
              className={`w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-400 transition-transform transform focus:outline-none focus:ring-4 focus:ring-indigo-300 ${
                loading ? "cursor-wait bg-indigo-400" : null
              }`}
              disabled={loading ? true : false}
            >
              Sign Up
            </button>
          </form>

          <div className="flex flex-col items-center gap-3 mt-2 mb-8">
            <p className="mt-4 text-gray-600">or signup using</p>
            <button
              className="text-4xl text-black"
              onClick={handleGoogleLogin}
              onMouseOver={() => setIconColored(true)}
              onMouseLeave={() => setIconColored(false)}
            >
              {iconColored ? <FcGoogle /> : <RiGoogleFill />}
            </button>
          </div>
          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
