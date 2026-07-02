function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo */}

          <div>
            <h2 className="text-2xl font-bold text-orange-400"> AntojApp</h2>

            <p className="mt-3 text-gray-300">
              Descubre restaurantes, promociones y los mejores lugares para
              disfrutar tu comida favorita.
            </p>
          </div>

          {/* Enlaces */}

          <div>
            <h3 className="text-xl font-semibold mb-3">Navegación</h3>

            <ul className="space-y-2 text-gray-300">
              <li>Inicio</li>

              <li>Productos</li>

              <li>Ofertas</li>

              <li> Tienda</li>

              <li>Contacto</li>
            </ul>
          </div>

          {/* Contacto */}

          <div>
            <h3 className="text-xl font-semibold mb-3">Contáctanos</h3>

            <p className="text-gray-300">contacto@antojapp.com</p>

            <p className="text-gray-300">+51 976740520</p>

            <p className="text-gray-300">Lima - Perú</p>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="text-center text-gray-400">
          {anio} AntojApp | Proyecto desarrollado en React + Vite + Tailwind
          CSS
        </div>
      </div>
    </footer>
  );
}

export default Footer;
