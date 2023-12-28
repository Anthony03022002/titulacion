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
    <div className="App">
      <div className="row mt-3">
        <div className="col-12 col-lg-8 offset-0 offset-lg-2">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Cedula</th>
                  <th>Nombre Completo</th>
                  <th>Correo Electronico</th>
                  <th>Direccion</th>
                  <th>Fecha Inicio</th>
                  <th>Producto</th>
                  <th>Cantidad del Producto</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {clientes.map((clientes) => (
                  <tr key={clientes.cedula}>
                    <td>{clientes.cedula}</td>
                    <td>{clientes.nombre_completo}</td>
                    <td>{clientes.email}</td>
                    <td>{clientes.direccion}</td>
                    <td>{clientes.fecha_inicio}</td>
                    <td>{clientes.nombre_producto}</td>
                    <td>{clientes.cantidad_producto}</td>
                    
                    <td>
                    <button className="btn btn-info">
                      <Link to='/pagosMensuales'><i class="bi bi-file-earmark-person-fill"></i></Link>
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => navigate(`/clientes/${clientes.cedula}`)}
                      >
                        <i class="bi bi-pencil"></i>
                        
                      </button>
                      
                    </td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
