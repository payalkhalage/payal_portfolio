import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-6">
      &copy; {new Date().getFullYear()} Payal Khalage. All rights reserved.
    </footer>
  );
}
