import React from "react";
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const Unauthorized = () => {
  const router = useRouter();
  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <Layout title="Unauthorized Access">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Access Denied!</h1>
          <p className="text-lg text-gray-700 mb-6">Oops! You don&apos;t have permission to access this page.</p>
          <button
            onClick={handleGoHome}
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Return to Home
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Unauthorized;
