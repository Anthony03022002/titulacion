import { useNavigate } from "react-router-dom";

export const ProductosCard = ({ productos }) => {

  const navigate = useNavigate();

  return (
    <div>
      <p>Producto: {productos.nombre_producto}</p>
      <p>Precio: {productos.precio}</p>
      <p>Accion<button
        onClick={()=>{
          navigate(`/productos/${productos.nombre_producto}`)
        }}
      >Ver</button></p>
      <hr />
    </div>
  );
};
