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
  }, []);

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col">
            <label className="form-label">Producto</label>
            <input
              type="text"
              className="form-control"
              placeholder="Producto"
              {...register("nombre_producto", { required: true })}
            />
            {errors.nombre_producto && <span>Este campo es requerido</span>}
          </div>
          <div className="col">
            <label className="form-label">Precio</label>
            <input
              type="number"
              className="form-control"
              placeholder="Precio"
              {...register("precio", { required: true })}
            />
          </div>
          {errors.precio && <span>Este campo es requerido</span>}
        </div>
        <button
          className="btn btn-success"
          style={{ position: "absolute", right: "200px", bottom: "395px" }}
        >
          Guardar
        </button>
      </form>
      {params.nombre_producto && (
        <button
          className="btn btn-danger"
          style={{ position: "absolute", right: "300px", bottom: "395px" }}
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
