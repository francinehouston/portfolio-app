import {RevealOnScroll} from "../RevealOnScroll";
import React ,{useRef} from "react";

export default function ResumeButton() {
  const handleOpenResume = () => {
    // Place resume.pdf inside the "public" folder of your React project
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button
        onClick={handleOpenResume}
        className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-2xl shadow-md hover:bg-blue-700 transition"
      >
        View Resume
      </button>
    </div>
  );
}