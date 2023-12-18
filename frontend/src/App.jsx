import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Clientespage } from "./pages/Clientespage";
import { ClientesForm } from "./pages/ClientesForm";
import { Navegacion } from "./components/Navegacion";

const App = () => {
  return (
    <BrowserRouter>
      <Navegacion/>
      <Routes>
        <Route path="/" element = {<Navigate to = "/clientes"/>} />
        <Route path="/clientes" element= {<Clientespage/>} />
        <Route path="/crear-clientes" element= {<ClientesForm/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
