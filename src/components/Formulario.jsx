import { useState } from "react";

function Formulario() {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarFormulario = () => {

    alert(`
Gracias por contactarme ${nombre}

Tu correo es: ${correo}

Mensaje: ${mensaje}
    `);

  };

  return (
    <div>

      <h2>Contáctame</h2>

      <input
        type="text"
        placeholder="Ingrese su nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Ingrese su correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Escriba su mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />

      <br /><br />

      <button onClick={enviarFormulario}>
        Enviar
      </button>

      <hr />

      <h3>Vista previa</h3>

      <p><strong>Nombre:</strong> {nombre}</p>
      <p> <strong>Correo:</strong> {correo}</p>
      <p><strong>Mensaje:</strong> {mensaje}</p>

    </div>
  );
}

export default Formulario;