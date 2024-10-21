import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Opti Manage
        </Link>
        <div className="flex space-x-4">
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
