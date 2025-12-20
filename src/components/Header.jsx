import { useState } from "react";
import LogoJD from "../img/LogoPortFolioPng.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header
        data-aos="fade-down"
        data-aos-duration="800"
        className="
          fixed top-0 left-0 w-full z-50
          h-16 md:h-20
          px-6
          flex items-center justify-between
          bg-gradient-to-b from-black/70 to-black/20
          backdrop-blur-sm
          border-b border-white/5
        "
      >
        {/* Logo */}
        <img
          src={LogoJD}
          alt="Logo JD"
          className="h-10 md:h-12 w-auto"
        />

        {/* Botón menú */}
        <button
          onClick={() => setOpen(true)}
          className="text-white text-2xl md:text-3xl"
        >
          ☰
        </button>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* MENU LATERAL */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-72 z-50
          bg-gradient-to-b from-[#0B1220] to-[#0E1628]
          backdrop-blur-xl
          border-l border-white/10
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header menú */}
        <div className="h-16 px-6 flex items-center justify-between border-b border-white/10">
          <img src={LogoJD} alt="Logo" className="h-8" />
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <nav className="px-6 py-10 space-y-6 text-white text-lg">
          <button
            data-aos="fade-right"
            data-aos-delay="100"
            onClick={() => {
              setOpen(false);
              document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block w-full text-left hover:text-blue-400 transition"
          >
            Inicio
          </button>

          <button
            data-aos="fade-right"
            data-aos-delay="200"
            onClick={() => {
              setOpen(false);
              document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block w-full text-left hover:text-blue-400 transition"
          >
            Portfolio
          </button>

          <button
            data-aos="fade-right"
            data-aos-delay="300"
            onClick={() => {
              setOpen(false);
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block w-full text-left hover:text-blue-400 transition"
          >
            Contacto
          </button>
        </nav>
      </aside>
    </>
  );
}
