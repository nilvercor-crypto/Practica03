import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl font-bold mb-6">¿Qué se te antoja hoy?</h1>

            <p className="text-lg mb-8">
              Descubre restaurantes, promociones y los mejores platillos cerca
              de ti.
            </p>

            <Link
              to="/productos"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Explorar productos
            </Link>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Comida"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Categorías</h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
              className="h-52 w-full object-cover"
              alt="Hamburguesas"
            />

            <div className="p-4 text-center">
              <h3 className="font-bold text-xl">Hamburguesas</h3>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
              className="h-52 w-full object-cover"
              alt="Pizzas"
            />

            <div className="p-4 text-center">
              <h3 className="font-bold text-xl">Pizzas</h3>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
              className="h-52 w-full object-cover"
              alt="Sushi"
            />

            <div className="p-4 text-center">
              <h3 className="font-bold text-xl">Sushi</h3>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              className="h-52 w-full object-cover"
              alt="Pollo"
            />

            <div className="p-4 text-center">
              <h3 className="font-bold text-xl">Pollo</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">¿Por qué elegir AntojApp?</h2>

          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            AntojApp permite encontrar rápidamente restaurantes, comparar
            precios, descubrir promociones y conocer las opiniones de otros
            usuarios antes de realizar un pedido.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
