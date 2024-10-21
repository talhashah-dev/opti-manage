import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaSignInAlt, FaUserPlus, FaSearch } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Opti Manage
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className={`flex items-center space-x-1 transition-colors duration-200 hover:text-gray-300 ${
              router.pathname === "/login" ? "text-gray-300 font-semibold" : ""
            }`}
          >
            <FaSignInAlt />
            <span>Login</span>
          </Link>
          <Link
            href="/signup"
            className={`flex items-center space-x-1 transition-colors duration-200 hover:text-gray-300 ${
              router.pathname === "/signup" ? "text-gray-300 font-semibold" : ""
            }`}
          >
            <FaUserPlus />
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
