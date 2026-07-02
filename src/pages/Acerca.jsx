function Acerca() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Acerca de AntojApp
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="AntojApp"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>

          <p className="text-gray-700 mb-4 text-justify">
            AntojApp es una plataforma web desarrollada para ayudar a los
            usuarios a descubrir restaurantes, promociones y los mejores
            platillos de acuerdo con sus gustos. Nuestro objetivo es brindar una
            experiencia sencilla y rápida para encontrar el lugar ideal donde
            disfrutar una buena comida.
          </p>

          <p className="text-gray-700 text-justify">
            La aplicación integra información de restaurantes, categorías de
            comida, promociones y recomendaciones, permitiendo que los usuarios
            encuentren fácilmente la opción que mejor se adapte a sus
            preferencias.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-red-500 mb-4">Misión</h3>

          <p className="text-gray-700">
            Facilitar la búsqueda de opciones gastronómicas mediante una
            plataforma moderna, intuitiva y accesible para todos los usuarios.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-red-500 mb-4">Visión</h3>

          <p className="text-gray-700">
            Convertirnos en la plataforma líder para descubrir restaurantes y
            experiencias gastronómicas en el Perú.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-red-500 mb-4">Objetivo</h3>

          <p className="text-gray-700">
            Ofrecer información confiable sobre restaurantes, promociones y
            categorías gastronómicas mediante una aplicación desarrollada con
            tecnologías modernas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Acerca;
