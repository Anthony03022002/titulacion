import { useNavigate } from "react-router-dom";

export const ClientesCard = ({clientes}) => {

  const navigate = useNavigate()

  return (
    <div>
      <h4>cedula: {clientes.cedula}</h4>
      <p>Nombre: {clientes.nombre_completo}</p>
      <p>Email: {clientes.email}</p>
      <p>Dirección: {clientes.direccion}</p>
      <p>Producto: {clientes.nombre_producto}</p>
      <button
          onClick={()=>{
            navigate(`/clientes/${clientes.cedula}`)
          }}
      >Ver</button>
      <hr />
    </div>
  );
};

