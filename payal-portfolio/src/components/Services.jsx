import { motion } from "framer-motion";
import { FaLaptopCode, FaLayerGroup, FaGlobe, FaPalette } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      icon: <FaLaptopCode />,
      desc: "Responsive, modern interfaces using React & Tailwind CSS"
    },
    {
      title: "Full Stack Development",
      icon: <FaLayerGroup />,
      desc: "Frontend + backend integration with databases"
    },
    {
      title: "Web Development",
      icon: <FaGlobe />,
      desc: "Building functional and responsive websites using modern web technologies."
    },
    {
      title: "UI / UX Implementation",
      icon: <FaPalette />,
      desc: "Design-to-code implementation with user-friendly experience"
    }
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 bg-black text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-14 neon-title">
        Services
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.07 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl 
            border border-white/10 p-8
            shadow-[0_0_25px_rgba(140,0,255,0.35)]
            hover:shadow-[0_0_35px_#00eaff]
            transition-all duration-300"
          >
            {/* Icon */}
            <div className="text-5xl mb-5 text-cyan-400 
              drop-shadow-[0_0_12px_rgba(0,255,255,0.9)]">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
