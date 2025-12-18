// import { useEffect, useState } from "react";

// export default function Navbar() {
//   const [active, setActive] = useState("home");

//   const handleScroll = () => {
//     const sections = document.querySelectorAll("section");
//     let scrollPos = window.scrollY + 120;

//     sections.forEach((section) => {
//       const id = section.getAttribute("id");
//       if (
//         scrollPos >= section.offsetTop &&
//         scrollPos < section.offsetTop + section.offsetHeight
//       ) {
//         setActive(id);
//       }
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { id: "home", label: "Home" },
//     { id: "about", label: "About" },
//     { id: "skills", label: "Skills" },
//     { id: "projects", label: "Projects" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl 
//     bg-white/5 border-b border-white/10 shadow-lg">
//       <div className="flex justify-between items-center px-10 py-4">

//         {/* Brand */}
//         <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 
//         bg-clip-text text-transparent tracking-wide">
//           Payal
//         </h1>

//         {/* Links */}
//         <ul className="flex gap-10 text-lg font-medium">
//           {navLinks.map((link) => (
//             <li key={link.id}>
//               <a
//                 href={`#${link.id}`}
//                 className={`transition-all duration-300 ${
//                   active === link.id
//                     ? "text-cyan-400 drop-shadow-[0_0_8px_#22d3ee]"
//                     : "text-gray-300 hover:text-purple-400"
//                 }`}
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//       </div>
//     </nav>
//   );
// }




import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + 120;

      sections.forEach((section) => {
        const id = section.getAttribute("id");
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl
    bg-white/5 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Brand */}
        <h1
  className="text-3xl font-bold 
  leading-normal
  py-1
  bg-gradient-to-r from-purple-500 to-cyan-400 
  bg-clip-text text-transparent tracking-wide"
>
  Payal
</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`transition-all duration-300 ${
                  active === link.id
                    ? "text-cyan-400 drop-shadow-[0_0_8px_#22d3ee]"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-all duration-300 ${
                    active === link.id
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-purple-400"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
