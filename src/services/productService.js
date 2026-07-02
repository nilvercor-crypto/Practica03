const API_URL = "http://localhost:3000/productos";

// Obtener todos los productos
export async function getProductos() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Error al obtener los productos");
    }

    return await response.json();
  } catch (error) {
    console.error(error);

    return [];
  }
}

// Obtener un producto por ID
export async function getProducto(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      throw new Error("Producto no encontrado");
    }

    return await response.json();
  } catch (error) {
    console.error(error);

    return null;
  }
}

// Registrar un nuevo producto
export async function agregarProducto(producto) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(producto),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

// Actualizar un producto
export async function actualizarProducto(id, producto) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(producto),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

// Eliminar un producto
export async function eliminarProducto(id) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
}
