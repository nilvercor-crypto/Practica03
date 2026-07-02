import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const datos = localStorage.getItem("usuario");

    if (!datos) {
      navigate("/");

      return;
    }

    setUsuario(JSON.parse(datos));
  }, [navigate]);

  function cerrarSesion() {
    localStorage.removeItem("usuario");

    alert("Sesión cerrada correctamente.");

    navigate("/");
  }

  if (!usuario) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>

        <p className="text-gray-600 mb-8">
          Bienvenido
          <strong> {usuario.nombre}</strong>
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold">Productos</h2>

            <p className="text-5xl text-red-500 mt-4">12</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold">Categorías</h2>

            <p className="text-5xl text-green-500 mt-4">5</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold">Usuarios</h2>

            <p className="text-5xl text-blue-500 mt-4">1</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-10">
          <h2 className="text-2xl font-bold mb-4">Información del usuario</h2>

          <table className="table-auto w-full">
            <tbody>
              <tr>
                <td className="font-bold py-2">Nombre</td>

                <td>{usuario.nombre}</td>
              </tr>

              <tr>
                <td className="font-bold py-2">Correo</td>

                <td>{usuario.correo}</td>
              </tr>

              <tr>
                <td className="font-bold py-2">Estado</td>

                <td>Activo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <button
            onClick={cerrarSesion}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
