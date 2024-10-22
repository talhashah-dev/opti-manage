import Link from "next/link";
import Layout from "../components/Layout";
import { FiUserCheck, FiUserPlus } from "react-icons/fi";

const Home = () => {
  return (
    <Layout title="Opti Manage">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 w-full">
        <div className="absolute inset-0 bg-black opacity-40 w-full"></div> {/* Dark Overlay */}
        <div className="relative z-10 text-center w-full px-6">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white">
            Supercharge Your <span className="text-yellow-300">Task Management</span>
          </h1>
          <p className="text-xl mt-4 mb-10 text-white">
            Manage tasks with ease, whether you&apos;re an admin assigning tasks or a member tracking progress.
          </p>
          <div className="space-x-4">
            <Link href="/login">
              <button className="bg-yellow-500 px-8 py-3 rounded-lg text-lg font-medium hover:bg-yellow-400 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300">
                Get Started
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-green-500 px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-400 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300">
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-100 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Key Features</h2>
          <p className="text-lg text-gray-500 mt-4">Everything you need to manage your tasks efficiently.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full px-6">
          {/* Admin Features */}
          <div className="bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center space-x-4 mb-4">
              <FiUserCheck className="text-blue-500 text-4xl" />
              <h3 className="text-2xl font-semibold text-gray-700">For Admins</h3>
            </div>
            <p className="text-gray-600 mb-3">• Assign and manage tasks effortlessly.</p>
            <p className="text-gray-600 mb-3">• Monitor team progress in real-time.</p>
            <p className="text-gray-600">• Access detailed reports and insights.</p>
          </div>

          {/* Member Features */}
          <div className="bg-white p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center space-x-4 mb-4">
              <FiUserPlus className="text-green-500 text-4xl" />
              <h3 className="text-2xl font-semibold text-gray-700">For Members</h3>
            </div>
            <p className="text-gray-600 mb-3">• View assigned tasks and track progress.</p>
            <p className="text-gray-600 mb-3">• Mark tasks as completed with ease.</p>
            <p className="text-gray-600">• Collaborate seamlessly with your team.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
