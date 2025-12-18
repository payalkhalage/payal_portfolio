import { motion } from "framer-motion";
import Avatar from "../assets/avatar.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-24 
      px-6 md:px-20 pt-28
      bg-gradient-to-b from-black via-[#090015] to-[#050505] 
      text-white relative overflow-hidden"
    >
      {/* Neon Glow Background */}
      <div className="absolute w-[28rem] h-[28rem] bg-purple-600/40 blur-[150px] rounded-full -top-20 -left-20"></div>
      <div className="absolute w-[30rem] h-[30rem] bg-cyan-500/40 blur-[160px] rounded-full bottom-0 -right-20"></div>

      {/* TEXT — comes from LEFT */}
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="backdrop-blur-xl bg-white/5 p-10 rounded-3xl 
        border border-white/20 
        shadow-[0_0_40px_rgba(138,0,255,0.25)] 
        max-w-xl z-10"
      >
        <p className="text-lg text-purple-400 tracking-wide mb-3">
          Hello, I'm
        </p>

        <h1
          className="text-6xl md:text-7xl font-extrabold 
          leading-tight md:leading-[1.15]
          bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 
          bg-clip-text text-transparent
          drop-shadow-[0_0_10px_rgba(0,255,255,0.45)] pb-2"
        >
          Payal <br /> Khalage
        </h1>

        <p className="mt-5 text-gray-300 text-lg leading-relaxed">
          Frontend Developer | React.js & Modern UI
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-6">
          <motion.a
            href="#projects"
            whileHover={{ y: -4, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 260 }}
            className="px-8 py-3 rounded-full font-semibold 
            bg-purple-600/80 border border-purple-500 
            shadow-[0_0_12px_rgba(170,0,255,0.7)]
            hover:shadow-[0_0_22px_rgba(170,0,255,1)]"
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -4, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 260 }}
            className="px-8 py-3 rounded-full font-semibold
            border border-cyan-400 text-cyan-400
            hover:bg-cyan-500 hover:text-black
            shadow-[0_0_12px_rgba(0,255,255,0.35)]
            hover:shadow-[0_0_26px_rgba(0,255,255,0.9)]"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* AVATAR — comes from RIGHT */}
      <motion.div
        initial={{ x: 120, opacity: 0, scale: 0.95 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
        className="relative w-72 h-72 md:w-80 md:h-80 z-10"
      >
        {/* Floating */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <div className="absolute inset-0 rounded-full 
            bg-gradient-to-r from-purple-500/50 to-cyan-400/50 blur-3xl">
          </div>

          <img
            src={Avatar}
            alt="Payal Avatar"
            className="relative rounded-full w-full h-full object-cover border-4 
            border-white/20 shadow-[0_0_30px_rgba(0,255,255,0.45)] 
            backdrop-blur-3xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
