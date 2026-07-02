import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProductos } from "../services/productService";

function Productos() {
  const [productos, setProductos] = useState([]);

  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    cargarProductos();
  }, []);

  async function cargarProductos() {
    const data = await getProductos();

    setProductos(data);
  }

  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      producto.categoria.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Nuestros Productos
      </h1>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Buscar producto..."
          className="w-full border rounded-lg p-3 shadow"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {productosFiltrados.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8">
          {productosFiltrados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-xl">
          No se encontraron productos.
        </div>
      )}
    </div>
  );
}

export default Productos;
