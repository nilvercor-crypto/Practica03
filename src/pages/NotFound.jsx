import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mx-auto text-center mt-20 px-4">
      <h1 className="text-9xl font-bold text-red-600">404</h1>

      <h2 className="text-3xl font-semibold mt-6 mb-4">
        ¡Ups! Esta ruta se perdió en el menú
      </h2>

      <p className="text-lg text-gray-700 mb-6">
        Parece que el antojo que buscabas no existe o fue devorado antes de
        llegar aquí.
      </p>

      <Link to="/">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg text-lg transition">
          Volver al Inicio
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
