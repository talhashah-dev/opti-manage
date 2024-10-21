import Link from "next/link";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout title="Home">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Task Management System</h1>
        <p className="text-lg text-gray-600 mb-8">Manage your tasks efficiently, whether you&apos;re an admin assigning tasks or a member tracking your progress.</p>
        <Link href="/login">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-gray-800">For Admins</h3>
              <p className="text-gray-600">Assign and manage tasks easily.</p>
              <p className="text-gray-600">Monitor team progress.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-gray-800">For Members</h3>
              <p className="text-gray-600">View your assigned tasks.</p>
              <p className="text-gray-600">Mark tasks as completed.</p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Link href="/signup">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
              Create an Account
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
