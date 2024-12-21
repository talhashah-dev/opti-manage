import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import { useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go"
import Modal from "@/common/Modal";
import Clients from "@/components/Clients";
import { motion } from 'framer-motion';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const heroText = "Supercharge Your Task Management".split(" ");


  const handleClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 600);
    };
  
    window.addEventListener("scroll", toggleVisible);
  
    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }



  return (
    <Layout title="Opti Manage">
      {/* Hero Section */}
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src="/images/logo.png"
                alt="Company Logo"
                width={32}
                height={32}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" 
            onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="#features" className="text-sm font-semibold leading-6 text-gray-900">Features</Link>
            <Link href="#pricing" className="text-sm font-semibold leading-6 text-gray-900">Pricing</Link>
            <Link href="#faq" className="text-sm font-semibold leading-6 text-gray-900">FAQs</Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </nav>
        
        <div className="lg:hidden" role="dialog" aria-modal="true">
          {/* <div className="fixed inset-0 z-50"></div> */}
          {/* menu mobile */}

          <div className={`${mobileMenuOpen ? "fixed" : "hidden"} inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}>
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p- 1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-8 w-auto"
                  src="/images/logo.png"
                  alt="Company Logo"
                  width={32}
                  height={32}
                />
              </Link>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 flex flex-col gap-5">
                  <Link href="#features" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200" onClick={() => handleClick()}>Features</Link>
                  <Link href="#pricing" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200" onClick={() => handleClick()}>Pricing</Link>
                  <Link href="#faq" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200" onClick={() => handleClick()}>FAQs</Link>
                </div>
                <div className="py-6">
                  <Link href="/login" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200">Log in</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            {heroText.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">OptiManage offers intuitive task assignment, real-time progress tracking, and secure, role-based access, making team management seamless and efficient. Perfect for keeping projects organized and on schedule.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <motion.div initial="hidden" animate="visible" whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: .2
                  }
                }}>
                  <Link href="/signup" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Get started</Link>
                </motion.div>
                <motion.div initial="hidden" animate="visible" whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: .2
                  }
                }}>
                  <Link href="#faq" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></Link>
                </motion.div>
              </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
      </div>
    </div>

      {/* Clients Section */}
      <Clients />

      {/* Features Section */}
      <Features />

      {/* Pricing Section */}
      <Pricing />
      
      {/* FAQs Section */}
      <Faq />
      <button
              title="GO TO TOP"
              className={`rounded-full p-4 text-2xl text-purple-500 hover:text-white bg-white hover:bg-[#9089fc] fixed right-5 bottom-10 shadow-lg z-30 shadow-[#9089fc] ${
                visible ? "block" : "hidden"
              }`}
              onClick={scrollToTop}
            >
              <GoArrowUp />
            </button>
    </Layout>
  );
};

export default Home;
