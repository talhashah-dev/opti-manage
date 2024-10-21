import React from "react";
import Layout from '../components/Layout';

const Unauthorized = () => {
  return (
    <Layout title="Unauthorized Access">
      <h1 className="text-2xl font-bold mb-6">Unauthorized Access</h1>
      <p>You do not have permission to access this page.</p>
    </Layout>
  );
};

export default Unauthorized;
