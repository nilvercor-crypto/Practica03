import productos from "../data/productos";

// Obtener todos los productos
export async function getProductos() {
  return productos;
}

// Obtener un producto por ID
export async function getProducto(id) {
  return productos.find((p) => p.id === Number(id));
}

// Registrar un nuevo producto
export async function agregarProducto(producto) {
  productos.push(producto);
  return producto;
}

// Actualizar producto
export async function actualizarProducto(id, productoActualizado) {
  const index = productos.findIndex((p) => p.id === Number(id));

  if (index !== -1) {
    productos[index] = productoActualizado;
  }

  return productoActualizado;
}

// Eliminar producto
export async function eliminarProducto(id) {
  const index = productos.findIndex((p) => p.id === Number(id));

  if (index !== -1) {
    productos.splice(index, 1);
  }
}