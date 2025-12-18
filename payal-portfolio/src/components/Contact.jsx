import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
      <p className="mb-6">You can reach me via email or GitHub:</p>
      <p>Email: <a href="mailto:your.email@example.com" className="text-purple-400 hover:underline">payalkhalage9090@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/payalkhalage" target="_blank" className="text-purple-400 hover:underline">payalkhalage</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/payal-khalage" target="_blank" className="text-purple-400 hover:underline">payal-khalage</a></p>
    </section>
  );
}
