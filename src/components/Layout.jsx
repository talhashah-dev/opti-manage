import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ title, children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Management System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 md:px-8 py-8 bg-white shadow-md rounded-lg mt-4">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
