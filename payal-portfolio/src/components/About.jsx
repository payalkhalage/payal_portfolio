import React from "react";
import Avatar from "../assets/avatar.png";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-purple-400">
        About Me
      </h2>

      <div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 
        bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 
        shadow-xl transition-all duration-700 hover:shadow-[0_0_40px_rgba(170,0,255,0.25)]"
      >
        {/* Avatar */}
        <div className="flex-shrink-0 animate-fadeIn">
          <img
            src={Avatar}
            alt="Payal Khalage"
            className="w-44 h-44 md:w-52 md:h-52 rounded-full 
            border-4 border-purple-500 
            shadow-[0_0_25px_rgba(170,0,255,0.6)]"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left animate-slideUp">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-purple-300">
            Hi, I’m Payal Khalage 👋
          </h3>

          <p className="text-gray-300 leading-relaxed mb-4">
            I am a{" "}
            <span className="text-white font-semibold">
              final year Computer Science student
            </span>{" "}
            with a strong passion for{" "}
            <span className="text-purple-400">Frontend Development</span>{" "}
            and{" "}
            <span className="text-purple-400">UI/UX Design</span>.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            I specialize in building{" "}
            <span className="text-white font-medium">
              modern, responsive, and user-friendly web applications
            </span>{" "}
            using{" "}
            <span className="text-white">
              React.js, Node.js, MongoDB, and Tailwind CSS
            </span>.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            I have worked on multiple academic and personal projects and I’m
            currently focused on growing as a{" "}
            <span className="text-purple-400 font-semibold">
              freelancer
            </span>, delivering clean designs and smooth user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full font-semibold text-white
              bg-purple-600 hover:bg-purple-700
              shadow-[0_0_20px_rgba(170,0,255,0.7)]
              hover:shadow-[0_0_35px_rgba(170,0,255,1)]
              transition-all"
            >
              Hire Me
            </a>

            <a
              href="/Payal_Khalage_CV.pdf"
              download
              className="px-8 py-3 rounded-full font-semibold text-purple-300
              border border-purple-500
              hover:bg-purple-500/10
              transition-all"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}







