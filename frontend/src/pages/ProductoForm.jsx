import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createProductos,
  deleteProductos,
  updateProductos,
  getAllProducto,
} from "../api/productos.api";
import { useNavigate, useParams } from "react-router-dom";

export const ProductoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.nombre_producto) {
      await updateProductos(params.nombre_producto, data);
    } else {
      await createProductos(data);
    }
    navigate("/productos");
  });

  useEffect(() => {
    async function loadProducto() {
      if (params.nombre_producto) {
        const { data } = await getAllProducto(params.nombre_producto);
        setValue("nombre_producto", data.nombre_producto);
        setValue("precio", data.precio);
      }
    }
    loadProducto();
  },[]);

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
      <div className="row g-3 align-items-center">
      <label className="col-form-label">Producto:</label>
      <div className="col-sm-10">
            <input
              type="text" className="form-control"
              placeholder="Nombre del producto"
              {...register("nombre_producto", { required: true })}
            />
            {errors.nombre_producto && <span>Este campo es requerido</span>}
          </div>
          <div className="row g-3 align-items-center">
          <label className="col-form-label">Precio:</label>
            <input type="number" className="form-control"  {...register("precio", { required: true })} />
            {errors.precio && <span>Este campo es requerido</span>}
          </div>
        </div>
        <button className="btn btn-success" style={{ position: 'absolute', right: '200px',  bottom: '395px',}}>Guardar</button>
      </form>
      {params.nombre_producto && (
        <button className="btn btn-danger" style={{ position: 'absolute', right: '300px',  bottom: '395px', }}
          onClick={async () => {
            const aceptar = window.confirm("Seguro de eliminar el producto");
            if (aceptar) {
              await deleteProductos(params.nombre_producto);
              navigate("/productos");
            }
          }}
        >
          Eliminar
        </button>
      )}
    </div>
  );
};
