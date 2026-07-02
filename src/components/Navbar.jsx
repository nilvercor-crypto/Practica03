import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState(null);

    useEffect(() => {

        const datos = localStorage.getItem("usuario");

        if (datos) {
            setUsuario(JSON.parse(datos));
        }

    }, []);

    function cerrarSesion() {

        localStorage.removeItem("usuario");

        setUsuario(null);

        navigate("/");

    }

    return (

        <nav className="bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg">

            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                <h1 className="text-2xl font-bold">
                     AntojApp
                </h1>

                <ul className="flex gap-6 font-semibold">

                    <li>
                        <Link to="/" className="hover:text-yellow-300">
                            Inicio
                        </Link>
                    </li>

                    <li>
                        <Link to="/productos" className="hover:text-yellow-300">
                            Productos
                        </Link>
                    </li>

                    <li>
                        <Link to="/tienda" className="hover:text-yellow-300">
                            Tienda
                        </Link>
                    </li>

                    <li>
                        <Link to="/ofertas" className="hover:text-yellow-300">
                            Ofertas
                        </Link>
                    </li>

                    <li>
                        <Link to="/contacto" className="hover:text-yellow-300">
                            Contacto
                        </Link>
                    </li>

                    <li>
                        <Link to="/acerca" className="hover:text-yellow-300">
                            Acerca
                        </Link>
                    </li>

                    {

                        usuario ?

                        <>

                        <li>

                            <Link
                                to="/dashboard"
                                className="hover:text-yellow-300">

                                Dashboard

                            </Link>

                        </li>

                        <li>

                            <button
                                onClick={cerrarSesion}
                                className="bg-white text-red-600 px-4 py-2 rounded hover:bg-yellow-200">

                                Cerrar sesión

                            </button>

                        </li>

                        </>

                        :

                        <li>

                            <Link
                                to="/login"
                                className="bg-white text-red-600 px-4 py-2 rounded hover:bg-yellow-200">

                                Login

                            </Link>

                        </li>

                    }

                </ul>

            </div>

        </nav>

    );

}

export default Navbar;