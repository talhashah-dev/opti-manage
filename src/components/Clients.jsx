// components/Clients.js
import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "Microsoft", logo: "/images/clients/microsoft.png" },
  { name: "DELL", logo: "/images/clients/dell.png" },
  { name: "Ibex", logo: "/images/clients/ibex.png" },
  { name: "AH", logo: "/images/clients/ah.png" },
  { name: "BlackRock", logo: "/images/clients/blackrock.png" },
  { name: "Folio", logo: "/images/clients/folio.png" },
  { name: "Evil Corp", logo: "/images/clients/evilcorp.png" },
  { name: "HBL", logo: "/images/clients/hbl.png" },
];

const Clients = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Clients</h2>
        <p className="text-xl text-black mb-8">
          Trusted by companies & organizations who value innovation and
          excellence.
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-4"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={120}
                  height={60}
                  className="h-auto w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
