
function Inicio() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 flex items-center justify-center px-6">

      <div className="max-w-4xl text-center text-white">

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-cyan-400">
          Nilver Coronado Muñoz
        </h1>

        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
          Ingeniería de Sistemas e Informática
        </h3>

        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Apasionado por el desarrollo web, bases de datos,
          redes de comunicación y tecnologías modernas.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Este portafolio muestra mis proyectos académicos,
          habilidades técnicas y experiencia adquirida durante
          mi formación profesional.
        </p>

        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg">
          Ver Proyectos
        </button>

      </div>

    </section>
  );
}

export default Inicio;