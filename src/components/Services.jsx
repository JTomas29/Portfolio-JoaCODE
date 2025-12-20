import fondo from "../assets/FondoContacto.jpg";

export default function Services() {
  return (
    <section
      id="services"
      data-aos="fade-up"
      className="
        relative
        py-32 px-6
        text-white
        bg-cover bg-center
      "
      style={{ backgroundImage: `url(${fondo})` }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* TITULO */}
        <h2
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Desarrollo web moderno
          <br />
          <span className="text-cyan-400">
            sin vueltas ni complicaciones
          </span>
        </h2>

        {/* TEXTO */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-white/70 text-base md:text-lg"
        >
          Creo sitios web rápidos, atractivos y pensados para convertir visitantes
          en clientes. Me enfoco en soluciones claras, accesibles y adaptadas
          a cada proyecto.
        </p>

        {/* BOTÓN */}
        <div
          data-aos="zoom-in"
          data-aos-delay="450"
          className="mt-10"
        >
          <a
            href="https://wa.me/5491141711800?text=Hola,%20me%20gustaría%20consultar%20por%20una%20página%20web."
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              bg-cyan-400 text-black
              px-8 py-4 rounded-lg
              font-semibold
              hover:bg-cyan-300
              transition
            "
          >
            Contactame
          </a>
        </div>

      </div>
    </section>
  );
}
