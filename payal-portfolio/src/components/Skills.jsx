// // export default function Skills() {
// //   const skills = ["React.js", "Node.js", "MongoDB", "MySQL", "HTML", "CSS"];

// //   return (
// //     <section id="skills" className="py-20 px-4 bg-black text-center text-white">
// //       <h2 className="text-4xl font-bold mb-10 neon-title">Skills</h2>

// //       <div className="flex flex-wrap justify-center gap-6">
// //         {skills.map((skill) => (
// //           <div
// //             key={skill}
// //             className="px-8 py-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10
// //             shadow-[0_0_20px_rgba(140,0,255,0.4)]
// //             hover:shadow-[0_0_30px_#00eaff]
// //             hover:scale-110 transition-all duration-300 text-lg"
// //           >
// //             {skill}
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }


// import { motion } from "framer-motion";

// export default function Skills() {
//   const skills = [
//     { name: "HTML", glow: "shadow-[0_0_20px_rgba(255,100,100,0.6)]" },
//     { name: "CSS", glow: "shadow-[0_0_20px_rgba(100,150,255,0.6)]" },
//     { name: "JavaScript", glow: "shadow-[0_0_20px_rgba(255,220,100,0.6)]" },
//     { name: "React.js", glow: "shadow-[0_0_20px_rgba(0,234,255,0.6)]" },
//     { name: "Node.js", glow: "shadow-[0_0_20px_rgba(0,200,120,0.6)]" },
//     { name: "MongoDB", glow: "shadow-[0_0_20px_rgba(0,180,120,0.6)]" },
//     { name: "MySQL", glow: "shadow-[0_0_20px_rgba(0,120,255,0.6)]" }
//   ];

//   return (
//     <section id="skills" className="py-20 px-4 bg-black text-center text-white">
//       <h2 className="text-4xl font-bold mb-12 neon-title">Skills</h2>

//       <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
//         {skills.map((skill, index) => (
//           <motion.div
//             key={skill.name}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//             whileHover={{ scale: 1.08 }}
//             className={`px-8 py-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10
//               ${skill.glow}
//               hover:shadow-[0_0_30px_#00eaff]
//               transition-all duration-300 text-lg font-medium`}
//           >
//             {skill.name}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

















import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "MongoDB", icon: <FaDatabase />, color: "text-emerald-400" },
    { name: "MySQL", icon: <FaDatabase />, color: "text-sky-400" }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-14 neon-title">
        Skills
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl 
            border border-white/10 p-6 flex flex-col items-center
            shadow-[0_0_20px_rgba(140,0,255,0.4)]
            hover:shadow-[0_0_30px_#00eaff]
            transition-all duration-300"
          >
            {/* Icon */}
            <div
              className={`text-5xl mb-4 ${skill.color} drop-shadow-[0_0_12px_currentColor]`}
            >
              {skill.icon}
            </div>

            {/* Skill Name */}
            <p className="text-lg font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
