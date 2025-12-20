import LogoJD from "../img/LogoPortFolioPng.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center text-white px-6"
    >
      {/* CONTENIDO */}
      <div className="relative z-10 max-w-4xl text-center">

        {/* LOGO */}
        <img
          src={LogoJD}
          alt="Logo JD"
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="mx-auto mb-8 h-28 sm:h-32 md:h-40 lg:h-48 xl:h-56 w-auto"
        />

        {/* TEXTO MARCA */}
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="sm:text-base tracking-[0.35em] text-white uppercase mb-8"
        >
          Joa<span className="text-blue-400">CODE</span>
        </p>

        {/* TITULO */}
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          ¿Necesitás una{" "}
          <span className="text-cyan-400">página web</span>
          <br className="hidden md:block" />
          para tu{" "}
          <span className="text-blue-400">negocio</span>?
        </h1>

        {/* DESCRIPCIÓN */}
        <p
          data-aos="fade-up"
          data-aos-delay="450"
          className="text-white/70 max-w-2xl mx-auto text-base md:text-lg"
        >
          Desarrollo sitios modernos, rápidos y personalizados
          que ayudan a destacar tu marca y potenciar tu presencia online.
        </p>

        {/* FLECHA */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => {
              document.getElementById("portfolio")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center animate-bounce hover:border-white/60 transition"
          >
            ↓
          </button>
        </div>

      </div>
    </section>
  );
}
