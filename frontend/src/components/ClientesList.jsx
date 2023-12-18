import { useEffect, useState } from "react";
import { getAllClientes } from "../api/clientes.api";
import { ClientesCard } from "./ClientesCard";
export const ClientesList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function cargarClientes() {
      const res = await getAllClientes();
      setClientes(res.data);
    }
    cargarClientes();
  }, []);

  return (
    <div>
      {clientes.map((clientes) => (
        <ClientesCard key={clientes.cedula} clientes={clientes} />
      ))}
    </div>
  );
};
