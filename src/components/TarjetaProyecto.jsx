function TarjetaProyecto({proyecto }) {
    return (
        <div>
            <h3>{proyecto.nombre}</h3>
            <p><h3>{proyecto.descripcion} </h3></p>
            <p><strong>{proyecto.tecnologia}</strong></p>
        </div>
    )

}
export default TarjetaProyecto;