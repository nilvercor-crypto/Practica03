import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProductos } from "../services/productService";

function Tienda() {
  const [productos, setProductos] = useState([]);

  const [categoria, setCategoria] = useState("Todos");

  useEffect(() => {
    cargarProductos();
  }, []);

  async function cargarProductos() {
    const data = await getProductos();

    setProductos(data);
  }

  const categorias = [
    "Todos",

    ...new Set(productos.map((producto) => producto.categoria)),
  ];

  const productosFiltrados =
    categoria === "Todos"
      ? productos
      : productos.filter((producto) => producto.categoria === categoria);

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Tienda</h1>

      <div className="mb-8">
        <label className="font-semibold">Filtrar por categoría</label>

        <select
          className="w-full mt-2 border rounded-lg p-3"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {categorias.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {productosFiltrados.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default Tienda;
