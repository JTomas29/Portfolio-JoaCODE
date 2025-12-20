import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* WhatsApp */}
      <a
        href="https://wa.me/5491141711800?text=Hola,%20me%20gustaría%20consultar%20por%20una%20página%20web."
        target="_blank"
        rel="noreferrer"
        className="
          w-14 h-14
          rounded-full
          bg-[#25D366]
          flex items-center justify-center
          text-white text-2xl
          shadow-lg
          hover:scale-110 hover:bg-[#20bd5a]
          transition
        "
      >
        <FaWhatsapp />
      </a>

      {/* Scroll arriba */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="
          w-14 h-14
          rounded-full
          bg-blue-500/20
          backdrop-blur-md
          border border-blue-400/30
          flex items-center justify-center
          text-blue-400 text-xl
          shadow-lg shadow-blue-500/20
          hover:scale-110 hover:bg-blue-500/30
          transition
        "
      >
        <FaArrowUp />
      </button>

    </div>
  );
}
