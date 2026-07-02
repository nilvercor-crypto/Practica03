function SobreMi() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">

      <div className="max-w-4xl bg-white rounded-2xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">
          Sobre Mí
        </h1>

        <div className="text-center">

          <img
            src="img/nilver.jpg"
            alt="Foto de Nilver Coronado"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-cyan-500 shadow-lg"
          />

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Soy <span className="font-semibold text-cyan-600">Nilver Coronado Muñoz</span>,
            estudiante de Ingeniería de Sistemas e Informática, apasionado por el
            desarrollo de software, las bases de datos, las redes de comunicación y las tecnologías modernas.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Me encuentro en constante aprendizaje, fortaleciendo mis conocimientos
            en desarrollo web con tecnologías como React, Angular, Java, PHP y MySQL.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Mi objetivo es desarrollar soluciones tecnológicas innovadoras que contribuyan
            al crecimiento de las organizaciones y a la transformación digital.
          </p>

        </div>

      </div>

    </section>
  );
}

export default SobreMi;