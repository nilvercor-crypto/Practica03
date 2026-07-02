const URL = "http://localhost:3000/proyectos";
export async function obtenerProyectos(){

const response = await fetch(URL);

const data = await response.json();

return data;
}