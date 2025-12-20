import React from "react";
import logo from "../img/LogoPortFolioPng.png";

export default function Splash() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      
      {/* Glow Azul */}
      <div className="absolute w-72 h-72 bg-blue-700/30 rounded-full blur-3xl opacity-70 animate-pulse" />

      {/* Logo */}
      <img
        src={logo}
        alt="Logo Joacode"
        className="w-56 sm:w-64 md:w-72 animate-pulse relative"
      />
    </div>
  );
}
