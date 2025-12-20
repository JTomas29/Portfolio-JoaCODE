import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import LogoJD from "../img/LogoPortFolioPng.png";


export default function Footer() {
  return (
    <footer
            className="relative bg-gradient-to-r from-[#141E30] to-[#1C2A3A] border-t border-cyan-400/20 px-6 py-10 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LOGO + TEXTO */}
        <div className="flex items-center gap-4">
          <img src={LogoJD} alt="Logo JoaCODE" className="w-16 h-16 md:w-20 md:h-20" />
          <div>
            <p className="font-semibold">JOACODE</p>
            <p className="text-white/60 text-sm">Desarrollo Web</p>
          </div>
        </div>

        {/* CONTACTO */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">

          {/* WhatsApp */}
          <a
            href="https://wa.me/5491141711800?text=Hola,%20me%20gustaría%20consultar%20por%20una%20página%20web."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <FaWhatsapp className="text-cyan-400" />
            <span>+54 9 11 4171 1800 </span>
          </a>

          {/* Email */}
          <a
            href="mailto:joakotomas17@gmail.com"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <FaEnvelope className="text-cyan-400" />
            <span>joakotomas17@gmail.com</span>
          </a>

        </div>

      </div>
    </footer>
  );
}
