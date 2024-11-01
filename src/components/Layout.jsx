import Head from "next/head";
import { useRouter } from "next/router";
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
        <main className="flex-1 w-full mx-auto bg-white rounded-lg">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
