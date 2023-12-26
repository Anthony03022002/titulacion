import { useNavigate } from "react-router-dom";

export const ClientesCard = ({clientes}) => {

  const navigate = useNavigate()

  return (
    <div>
      <h4>cedula: {clientes.cedula}</h4>
      <p>Nombre: {clientes.nombre_completo}</p>
      <p>Email: {clientes.email}</p>
      <p>Dirección: {clientes.direccion}</p>
      <p>Fecha inicio: {clientes.fecha_inicio}</p>
      <p>Producto: {clientes.nombre_producto}</p>
      <p>Accion: <button
          onClick={()=>{
            navigate(`/clientes/${clientes.cedula}`)
          }}
      >Ver</button></p>
      <hr />
    </div>
  );
};

