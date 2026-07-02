import TarjetaHabilidad from "../components/TarjetaHabilidad";

function Habilidades() {
  const habilidades = [
    "html",
    "css",
    "react"
  ];

  return (
    <div>
      <h1>Habilidades</h1>
      <p>Página de habilidades</p>

      {habilidades.map((habilidad) => (
        <TarjetaHabilidad
          key={habilidad}
          nombre={habilidad}
        />
      ))}
    </div>
  );
}

export default Habilidades;