import {RevealOnScroll} from "../RevealOnScroll";
import React from "react";

export function ResumeButton() {
  const handleOpenResume = () => {
    console.log("Resume button clicked");
    // Place fullstackengineerresume.pdf inside the "public" folder of your React project
    const resumePath = `${import.meta.env.BASE_URL}fullstackengineerresume.pdf`;
    window.open(resumePath, "_blank", "noopener,noreferrer");
  };

  return (
       <RevealOnScroll>
    
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button
        onClick={handleOpenResume}
        className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-2xl shadow-md hover:bg-blue-700 transition"
      >
        View Resume
      </button>
    </div>
    </RevealOnScroll>
  );
}

