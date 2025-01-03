import { useState } from "react";
import {
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { FcGoogle } from "react-icons/fc";
import { RiGoogleFill } from "react-icons/ri";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [iconColored, setIconColored] = useState(false);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const router = useRouter();

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

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
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
      setLoading(false);
      switch (error.code) {
        case "auth/invalid-email":
          setError("Check Your Email Address & Password.");
          break;
        case "auth/missing-password":
          setError("Incorrect password. Please try again.");
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
        <title>Opti Manage | Login</title>
      </Head>

      <div className="text-black p-2 fixed mt-5 mx-5 hover:rounded-full hover:bg-indigo-500 hover:text-white">
        <Link href="/">
          <ArrowLeftIcon height={30} width={30} />
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md px-8 py-10 overflow-hidden">
          <span className="w-full flex justify-center mb-3">
            <Image src="/images/logo.png" width={80} height={80} alt="Logo" />
          </span>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Login to Your Account
          </h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition text-black"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition text-black"
              required
            />
            <button
              type="submit"
              className={`w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-400 transition-transform transform focus:outline-none focus:ring-4 focus:ring-indigo-300 ${
                loading ? "cursor-wait bg-indigo-400" : null
              }`}
              disabled={loading ? true : false}
            >
              Login
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
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-indigo-600 hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
