// ClientesCard.jsx
import { useNavigate } from "react-router-dom";

export const ClientesCard = ({ clientes }) => {
  const navigate = useNavigate();

  const verDetalles = () => {
    // Navegar a la nueva ruta con el cédula del cliente
    navigate(`/clientes/${clientes.cedula}/detalles`, {
      state: { clienteDetalles: clientes },
    });
  };

  return (
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
          </tr>
        </thead>
      </table>
    </div>
  );
};
