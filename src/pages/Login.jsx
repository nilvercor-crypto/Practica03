import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const usuarioValido = {
    correo: "U23253858@utp.edu.pe",
    password: "1234",
  };

  function iniciarSesion(e) {
    e.preventDefault();

    if (correo === "" || password === "") {
      alert("Complete todos los campos.");
      return;
    }

    // Validación de credenciales
    if (
      correo !== usuarioValido.correo ||
      password !== usuarioValido.password
    ) {
      alert("Usuario o contraseña incorrectos.");
      return;
    }

    const usuario = {
      nombre: "Nilver Coronado",
      correo: correo,
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Inicio de sesión correcto.");
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Iniciar Sesión</h1>

        <form onSubmit={iniciarSesion}>
          <div className="mb-5">
            <label className="block mb-2 font-semibold">Correo</label>

            <input
              type="email"
              className="w-full border rounded-lg p-3"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Ingrese su correo"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold">Contraseña</label>

            <input
              type="password"
              className="w-full border rounded-lg p-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
