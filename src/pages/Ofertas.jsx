import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProductos } from "../services/productService";

function Ofertas() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    cargarOfertas();
  }, []);

  async function cargarOfertas() {
    const data = await getProductos();

    // Productos con precio menor o igual a 30
    const ofertas = data.filter((producto) => producto.precio <= 30);

    setProductos(ofertas);
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-3">Ofertas del Día</h1>

      <p className="text-center text-gray-600 mb-10">
        Aprovecha nuestras mejores promociones.
      </p>

      {productos.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-xl">
          No existen ofertas disponibles.
        </div>
      )}
    </div>
  );
}

export default Ofertas;
