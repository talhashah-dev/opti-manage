import Link from "next/link";
import Layout from "../components/Layout";
import { FiUserCheck, FiUserPlus } from "react-icons/fi";

const Home = () => {
  return (
    <Layout title="Opti Manage">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen bg-[url('/path-to-your-background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
        <div className="relative z-10 text-center max-w-4xl mx-auto text-white">
          <h1 className="text-6xl font-extrabold tracking-tight leading-tight">
            Supercharge Your <span className="text-indigo-400">Task Management</span>
          </h1>
          <p className="text-2xl mt-6 mb-12 text-gray-200">
            Manage tasks with ease, whether you&apos;re an admin assigning tasks or a member tracking your progress.
          </p>
          <div className="space-x-4">
            <Link href="/login">
              <button className="bg-indigo-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-400 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300">
                Get Started
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-green-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-400 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300">
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Key Features</h2>
          <p className="text-xl text-gray-500 mt-4">Everything you need to manage your tasks efficiently.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">
          {/* Admin Features */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <FiUserCheck className="text-indigo-500 text-4xl" />
              <h3 className="text-2xl font-semibold text-gray-800">For Admins</h3>
            </div>
            <p className="text-gray-600 mb-2">• Assign and manage tasks effortlessly.</p>
            <p className="text-gray-600 mb-2">• Monitor team progress in real-time.</p>
            <p className="text-gray-600">• Detailed reports and insights.</p>
          </div>

          {/* Member Features */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <FiUserPlus className="text-green-500 text-4xl" />
              <h3 className="text-2xl font-semibold text-gray-800">For Members</h3>
            </div>
            <p className="text-gray-600 mb-2">• View assigned tasks and track progress.</p>
            <p className="text-gray-600 mb-2">• Mark tasks as completed with a click.</p>
            <p className="text-gray-600">• Collaborate with team members easily.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
