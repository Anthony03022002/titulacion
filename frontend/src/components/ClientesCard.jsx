// ClientesCard.jsx
import { useNavigate } from "react-router-dom";

export const ClientesCard = ({ clientes }) => {
  const navigate = useNavigate();


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
