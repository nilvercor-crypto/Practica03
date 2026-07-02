import TarjetaProyecto from "../components/TarjetaProyecto";
import { obtenerProyectos } from "../services/proyectoService";
import { useEffect, useState } from "react";

function Proyectos() {
const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    cargarProyectos();
  }, []);

  async function cargarProyectos() {
    const datos = await obtenerProyectos();
    setProyectos(datos);
  }

  return (
    <div>
      <h1>Proyectos</h1>

      {proyectos.map((item) => (
        <TarjetaProyecto key={item.id} proyecto={item} />
      ))}
    </div>
  );
}

export default Proyectos;
