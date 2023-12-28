// ClientesCard.jsx
import { useNavigate } from "react-router-dom";

export const ClientesCard = ({ clientes }) => {
  const navigate = useNavigate();


  return (
    <div>
      <p>Nombre: {clientes.nombre_completo}</p>
      <p>Email: {clientes.email}</p>
      <p>Dirección: {clientes.direccion}</p>
      <p>Fecha inicio: {clientes.fecha_inicio}</p>
      <p>Producto: {clientes.nombre_producto}</p>
      <p>cantidad del producto: {clientes.cantidad_producto}</p>
      <p>pagos mensuales: {clientes.pagos_mensuales}</p>
      <p>
        
        <button onClick={verDetalles}>
          Ver Detalles
        </button>
      </p>
      <p> <button
          onClick={()=>{
            navigate(`/clientes/${clientes.cedula}`)
          }}
      >editar</button></p>
      <hr />
    </div>
  );
};
