import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Clientespage } from "./pages/Clientespage";
import { ClientesForm } from "./pages/ClientesForm";
import { ProductoPage } from "./pages/ProductoPage";
import { ProductoForm } from "./pages/ProductoForm";
import { PagosMensuales } from "./components/PagosMensuales";
import { Navegacion } from "./components/Navegacion"; 
import {DetallesCliente} from "./components/DetallesCliente";
import { GenerarPago } from "./pages/GenerarPago"; 

const App = () => {
  return (
    <BrowserRouter>
      <Navegacion/>
      <Routes>
  <Route path="/" element={<Navigate to="/clientes" />} />
  <Route path="/clientes" element={<Clientespage />} />
  <Route path="/crear-clientes" element={<ClientesForm />} />
  <Route path="/clientes/:cedula" element={<ClientesForm />} />
  <Route path="/clientes/:cedula/pagosMensuales" element={<PagosMensuales />} />
  <Route path="/clientes/:cedula/detalles" element={<DetallesCliente />} />
  <Route path="/productos" element={<ProductoPage />} />
  <Route path="/crear-producto" element={<ProductoForm />} />
  <Route path="/productos/:nombre_producto" element={<ProductoForm />} />
  <Route path="/clientes/:cedula/generarPago" element={<GenerarPago />} />

</Routes>

    </BrowserRouter>
  );
};

export default App;
