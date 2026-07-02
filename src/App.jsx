import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Productos from "./pages/Productos";
import Ofertas from "./pages/Ofertas";
import Tienda from "./pages/Tienda";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/acerca" element={<Acerca />} />

        <Route path="/productos" element={<Productos />} />

        <Route path="/ofertas" element={<Ofertas />} />

        <Route path="/tienda" element={<Tienda />} />

        <Route path="/contacto" element={<Contacto />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
