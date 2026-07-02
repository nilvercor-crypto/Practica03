import { useState } from "react";

function Contacto() {
  const [nombre, setNombre] = useState("");

  const [correo, setCorreo] = useState("");

  const [mensaje, setMensaje] = useState("");

  const [enviado, setEnviado] = useState(false);

  function enviarFormulario(e) {
    e.preventDefault();

    if (nombre === "" || correo === "" || mensaje === "") {
      alert("Complete todos los campos.");

      return;
    }

    setEnviado(true);

    alert("Mensaje enviado correctamente.");

    setNombre("");

    setCorreo("");

    setMensaje("");
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Contáctanos</h1>

      <form
        onSubmit={enviarFormulario}
        className="bg-white shadow-lg rounded-lg p-8"
      >
        <div className="mb-5">
          <label className="block mb-2 font-semibold">Nombre</label>

          <input
            type="text"
            className="w-full border rounded-lg p-3"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 font-semibold">Correo electrónico</label>

          <input
            type="email"
            className="w-full border rounded-lg p-3"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 font-semibold">Mensaje</label>

          <textarea
            rows="5"
            className="w-full border rounded-lg p-3"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
        >
          Enviar mensaje
        </button>
      </form>

      {enviado && (
        <div className="mt-8 bg-green-100 border border-green-400 text-green-700 rounded-lg p-4">
          Su mensaje fue enviado correctamente. Nos comunicaremos con usted
          pronto.
        </div>
      )}
    </div>
  );
}

export default Contacto;
