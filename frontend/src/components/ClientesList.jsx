import { useEffect, useState } from "react";
import { getAllClientes } from "../api/clientes.api";
import { Link, useNavigate } from "react-router-dom";

export const ClientesList = () => {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function cargarClientes() {
      const res = await getAllClientes();
      setClientes(res.data);
    }
    cargarClientes();
  }, []);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Cedula</th>
            <th scope="col">Nombre Completo</th>
            <th scope="col">Meses diferidos</th>
            <th scope="col">Producto</th>
            <th scope="col">Total a Pagar</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((clientes) => (
            <tr key={clientes.cedula}>
              <td>{clientes.cedula}</td>
              <td>{clientes.nombre_completo}</td>
              <td>{clientes.meses_diferidos}</td>
              <td>{clientes.nombre_producto}</td>
              <td>{clientes.total_pagar}</td>
              <td>
                <button className="btn btn-info">
                  <Link to="/pagosMensuales">
                    <i className="bi bi-file-earmark-person-fill"></i>
                  </Link>
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate(`/clientes/${clientes.cedula}`)}
                >
                  <i className="bi bi-pencil"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
