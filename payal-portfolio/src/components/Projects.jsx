
// import React, { useState, useEffect } from "react";

// /* ---------------- RMS IMAGES ---------------- */
// import rms1 from "../assets/projects/rms/rms1.png";
// import rms2 from "../assets/projects/rms/rms2.png";
// import rms3 from "../assets/projects/rms/rms3.png";
// import rms4 from "../assets/projects/rms/rms4.png";
// import rms5 from "../assets/projects/rms/rms5.png";
// import rms6 from "../assets/projects/rms/rms6.png";

// /* ---------------- TRIPTALES IMAGES ---------------- */
// import trip1 from "../assets/projects/triptales/trip1.png";
// import trip2 from "../assets/projects/triptales/trip2.png";
// import trip3 from "../assets/projects/triptales/trip3.png";
// import trip4 from "../assets/projects/triptales/trip4.png";
// import trip5 from "../assets/projects/triptales/trip5.png";
// import trip6 from "../assets/projects/triptales/trip6.png";

// /* ---------------- WELLNESS APP IMAGES ---------------- */
// import well1 from "../assets/projects/wellnessapp/wellness1.png";
// import well2 from "../assets/projects/wellnessapp/wellness2.png";
// import well3 from "../assets/projects/wellnessapp/wellness3.png";
// import well4 from "../assets/projects/wellnessapp/wellness4.png";
// import well5 from "../assets/projects/wellnessapp/wellness5.png";

// export default function Projects() {
//   /* RMS Slider */
//   const rmsImages = [rms1, rms2, rms3, rms4, rms5, rms6];
//   const [rmsIndex, setRmsIndex] = useState(0);

//   /* TripTales Slider */
//   const tripImages = [trip1, trip2, trip3, trip4, trip5, trip6];
//   const [tripIndex, setTripIndex] = useState(0);

//   /* Wellness App Slider */
//   const wellImages = [well1, well2, well3, well4, well5];
//   const [wellIndex, setWellIndex] = useState(0);

//   /* Fullscreen Viewer */
//   const [fullscreenImg, setFullscreenImg] = useState(null);

//   /* Auto Slide Effects */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRmsIndex((prev) => (prev === rmsImages.length - 1 ? 0 : prev + 1));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTripIndex((prev) => (prev === tripImages.length - 1 ? 0 : prev + 1));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setWellIndex((prev) => (prev === wellImages.length - 1 ? 0 : prev + 1));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="projects"
//       className="min-h-screen px-6 py-20 bg-gradient-to-b from-black via-[#0d001a] to-black text-white"
//     >
//       <h2 className="text-4xl font-bold text-center mb-14 neon-title">
//         Projects
//       </h2>

//       {/* ------------- THREE PROJECTS IN ONE ROW ------------- */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//         {/* RMS */}
//         <ProjectCard
//           title="Restaurant Management System"
//           description="A full-stack restaurant system with admin dashboard, reservations, order management and billing."
//           github="https://github.com/payalkhalage/RestaurantManagementSystem"
//           images={rmsImages}
//           index={rmsIndex}
//           setIndex={setRmsIndex}
//           setFullscreenImg={setFullscreenImg}
//         />

//         {/* TripTales */}
//         <ProjectCard
//           title="TripTales Travel Planner"
//           description="A dynamic travel planning app built with MERN stack where users can explore destinations, create trips and track itineraries."
//           github="https://github.com/payalkhalage/trip_tales"
//           images={tripImages}
//           index={tripIndex}
//           setIndex={setTripIndex}
//           setFullscreenImg={setFullscreenImg}
//         />

//         {/* Wellness App */}
//         <ProjectCard
//           title="Wellness & Yoga Appointment App"
//           description="A modern wellness and lifestyle tracking application designed to help users build healthy habits through daily activity logs, goal tracking, personalized wellness insights, and a clean, user-friendly interface."
//           github="https://github.com/payalkhalage/wellness-app"
//           images={wellImages}
//           index={wellIndex}
//           setIndex={setWellIndex}
//           setFullscreenImg={setFullscreenImg}
//         />

//       </div>

//       {/* FULLSCREEN MODAL */}
//       {fullscreenImg && (
//         <div
//           className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center
//             z-50 cursor-pointer"
//           onClick={() => setFullscreenImg(null)}
//         >
//           <img
//             src={fullscreenImg}
//             alt="Fullscreen"
//             className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
//           />
//         </div>
//       )}
//     </section>
//   );
// }

// /* ---------------------------------------------------------
//    REUSABLE COMPONENT FOR PROJECT CARDS
// --------------------------------------------------------- */
// function ProjectCard({ title, description, github, images, index, setIndex, setFullscreenImg }) {
//   return (
//     <div className="bg-white/5 p-6 md:p-8 rounded-3xl backdrop-blur-md
//         border border-white/10 shadow-[0_0_40px_rgba(138,0,255,0.25)] text-center">

//       {/* SLIDER */}
//       <div
//         className="relative w-full h-[250px] md:h-[300px] overflow-hidden rounded-2xl mb-4 md:mb-6 bg-black cursor-pointer"
//         onClick={() => setFullscreenImg(images[index])}
//       >
//         <div
//           className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${index * 100}%)` }}
//         >
//           {images.map((img, idx) => (
//             <img
//               key={idx}
//               src={img}
//               className="w-full h-full object-contain bg-black flex-shrink-0"
//               alt="Project Screenshot"
//             />
//           ))}
//         </div>
//       </div>

//       {/* DOTS */}
//       <div className="flex justify-center gap-2 mb-4 md:mb-6">
//         {images.map((_, idx) => (
//           <button
//             key={idx}
//             className={`w-3 h-3 rounded-full transition-all
//                 ${idx === index
//                   ? "bg-purple-500 scale-125 shadow-[0_0_8px_rgba(138,0,255,0.9)]"
//                   : "bg-gray-500"}`}
//             onClick={() => setIndex(idx)}
//           ></button>
//         ))}
//       </div>

//       {/* TITLE */}
//       <h3 className="text-2xl md:text-3xl font-bold text-purple-300">{title}</h3>
//       <p className="text-gray-300 mt-2 md:mt-3">{description}</p>

//       {/* GITHUB BUTTON */}
//       <a
//         href={github}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="mt-4 md:mt-6 inline-block px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold
//           bg-purple-600/80 border border-purple-500 
//           shadow-[0_0_15px_rgba(170,0,255,0.7)]
//           hover:shadow-[0_0_30px_rgba(170,0,255,1)]
//           hover:bg-purple-700 transition-all"
//       >
//         View on GitHub
//       </a>
//     </div>
//   );
// }



















import React, { useState, useEffect } from "react";

/* ---------------- RMS IMAGES ---------------- */
import rms1 from "../assets/projects/rms/rms1.png";
import rms2 from "../assets/projects/rms/rms2.png";
import rms3 from "../assets/projects/rms/rms3.png";
import rms4 from "../assets/projects/rms/rms4.png";
import rms5 from "../assets/projects/rms/rms5.png";
import rms6 from "../assets/projects/rms/rms6.png";

/* ---------------- TRIPTALES IMAGES ---------------- */
import trip1 from "../assets/projects/triptales/trip1.png";
import trip2 from "../assets/projects/triptales/trip2.png";
import trip3 from "../assets/projects/triptales/trip3.png";
import trip4 from "../assets/projects/triptales/trip4.png";
import trip5 from "../assets/projects/triptales/trip5.png";
import trip6 from "../assets/projects/triptales/trip6.png";

/* ---------------- WELLNESS APP IMAGES ---------------- */
import well1 from "../assets/projects/wellnessapp/wellness1.png";
import well2 from "../assets/projects/wellnessapp/wellness2.png";
import well3 from "../assets/projects/wellnessapp/wellness3.png";
import well4 from "../assets/projects/wellnessapp/wellness4.png";
import well5 from "../assets/projects/wellnessapp/wellness5.png";

export default function Projects() {
  const rmsImages = [rms1, rms2, rms3, rms4, rms5, rms6];
  const tripImages = [trip1, trip2, trip3, trip4, trip5, trip6];
  const wellImages = [well1, well2, well3, well4, well5];

  const [rmsIndex, setRmsIndex] = useState(0);
  const [tripIndex, setTripIndex] = useState(0);
  const [wellIndex, setWellIndex] = useState(0);
  const [fullscreenImg, setFullscreenImg] = useState(null);

  useEffect(() => {
    const i = setInterval(
      () => setRmsIndex((p) => (p === rmsImages.length - 1 ? 0 : p + 1)),
      3000
    );
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const i = setInterval(
      () => setTripIndex((p) => (p === tripImages.length - 1 ? 0 : p + 1)),
      3000
    );
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const i = setInterval(
      () => setWellIndex((p) => (p === wellImages.length - 1 ? 0 : p + 1)),
      3000
    );
    return () => clearInterval(i);
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-black via-[#0d001a] to-black text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-14 neon-title">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Restaurant Management System"
          description="A full-stack restaurant management system with an table reservations, order processing, and billing features."
          tech="Tech: Angular.js, Node.js, Express.js, MySQL, CSS"
          github="https://github.com/payalkhalage/RestaurantManagementSystem"
          images={rmsImages}
          index={rmsIndex}
          setIndex={setRmsIndex}
          setFullscreenImg={setFullscreenImg}
        />

        <ProjectCard
          title="TripTales Travel Planner"
          description="A MERN-based travel planning application that allows users to explore destinations, create trips, and manage travel itineraries."
          tech="Tech: React, Node.js, Express.js, MongoDB, REST APIs"
          github="https://github.com/payalkhalage/trip_tales"
          images={tripImages}
          index={tripIndex}
          setIndex={setTripIndex}
          setFullscreenImg={setFullscreenImg}
        />

        <ProjectCard
          title="Wellness & Yoga Appointment App"
          description="A wellness and yoga appointment application that helps users manage sessions, track daily activities, and maintain healthy routines."
          tech="Tech: React, CSS, Context API"
          github="https://github.com/payalkhalage/arvyax-wellness-app"
          images={wellImages}
          index={wellIndex}
          setIndex={setWellIndex}
          setFullscreenImg={setFullscreenImg}
        />
      </div>

      {fullscreenImg && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setFullscreenImg(null)}
        >
          <img
            src={fullscreenImg}
            alt="Fullscreen"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
          />
        </div>
      )}
    </section>
  );
}

/* ---------------- PROJECT CARD ---------------- */

function ProjectCard({
  title,
  description,
  tech,
  github,
  images,
  index,
  setIndex,
  setFullscreenImg,
}) {
  return (
    <div className="bg-white/5 p-6 md:p-8 rounded-3xl backdrop-blur-md border border-white/10 shadow-[0_0_40px_rgba(138,0,255,0.25)] text-center">
      <div
        className="relative w-full h-[250px] md:h-[300px] overflow-hidden rounded-2xl mb-6 bg-black cursor-pointer"
        onClick={() => setFullscreenImg(images[index])}
      >
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Project Screenshot"
              className="w-full h-full object-contain bg-black flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mb-6">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index
                ? "bg-purple-500 scale-125 shadow-[0_0_8px_rgba(138,0,255,0.9)]"
                : "bg-gray-500"
            }`}
          />
        ))}
      </div>

      <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
      <p className="text-gray-300 mt-3">{description}</p>
      <p className="text-gray-400 text-sm mt-2">{tech}</p>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block px-8 py-3 rounded-full font-semibold bg-purple-600/80 border border-purple-500 shadow-[0_0_15px_rgba(170,0,255,0.7)] hover:shadow-[0_0_30px_rgba(170,0,255,1)] hover:bg-purple-700 transition-all"
      >
        View on GitHub
      </a>
    </div>
  );
}
