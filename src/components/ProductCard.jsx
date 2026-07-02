function ProductCard({ producto }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{producto.nombre}</h2>

        <p className="text-gray-600 mt-2">
          Categoría:
          <span className="font-semibold"> {producto.categoria}</span>
        </p>

        <p className="text-green-600 text-2xl font-bold mt-3">
          S/ {producto.precio}
        </p>

        <p className="mt-2">
          Stock:
          {producto.stock > 0 ? (
            <span className="text-blue-600 font-semibold">
              {" "}
              {producto.stock}
            </span>
          ) : (
            <span className="text-red-600 font-semibold">Agotado</span>
          )}
        </p>

        <button className="mt-5 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition">
          Ver producto
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
