// En el archivo ClientesForm.jsx
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createCliente,
  deleteCliente,
  updateCliente,
  getCliente,
} from "../api/clientes.api";
import { getAllProductos } from "../api/productos.api";
import { useNavigate, useParams } from "react-router-dom";
import "./ClientesForm.css"; // Importa tu archivo CSS

export const ClientesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [productos, setProductos] = useState([]);
  const [precioSeleccionado, setPrecioSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(0);
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.cedula) {
      await updateCliente(params.cedula, data);
    } else {
      await createCliente(data);
    }
    navigate("/clientes");
  });
  const obtenerFechaActual = () => {
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
    const dia = String(fechaActual.getDate()).padStart(2, "0");
    return `${año}-${mes}-${dia}`;
  };

  useEffect(() => {
    async function loadCliente() {
      if (params.cedula) {
        const { data } = await getCliente(params.cedula);
        setValue("cedula", data.cedula);
        setValue("nombre_completo", data.nombre_completo);
        setValue("email", data.email);
        setValue("direccion", data.direccion);
        setValue("fecha_inicio", data.fecha_inicio);
        setValue("nombre_producto", data.nombre_producto);
        setValue("cantidad_producto", data.cantidad_producto);
        setValue("pagos_mensuales", data.pagos_mensuales);
        setValue("total_pagar", data.total_pagar);
      }
    }
    loadCliente();
  }, []);

  useEffect(() => {
    async function loadProductos() {
      try {
        const res = await getAllProductos();
        setProductos(res.data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    }

    loadProductos();
  }, []);
  const handleProductoChange = (event) => {
    const productoSeleccionado = event.target.value;
    const producto = productos.find(
      (p) => p.nombre_producto === productoSeleccionado
    );

    // Actualizar el valor del precio seleccionado en el estado
    setPrecioSeleccionado(producto ? producto.precio : null);

    // Actualizar el valor del campo del formulario utilizando setValue de react-hook-form
    setValue("precio", producto ? producto.precio : null);
  };
  const handleCantidadChange = (event) => {
    const nuevaCantidad = event.target.value;

    setCantidad(Number(nuevaCantidad));
  };
  useEffect(() => {
    const total = cantidad * precioSeleccionado;

    setValue("total", total || "");
  }, [cantidad, precioSeleccionado, setValue]);

  return (
    <div>
      <form className="clientes-form" onSubmit={onSubmit}>
        <label>Cedula:</label>
        <input
          type="number"
          placeholder="Ingrese su cedula"
          {...register("cedula", { required: true })}
        />
        {errors.cedula && <span>La cedula es requerida</span>}
        <label>Nombre Completo:</label>
        <input
          type="text"
          placeholder="Nombre Completo"
          {...register("nombre_completo", { required: true })}
        />
        {errors.nombre_completo && <span>Este campo es requerido</span>}

        <label>Correo Electrónico:</label>
        <input
          type="email"
          placeholder="Correo electronico"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Este campo es requerido</span>}

        <label>Dirección:</label>
        <input
          type="text"
          placeholder="Direccion"
          {...register("direccion", { required: true })}
        />
        {errors.direccion && <span>Este campo es requerido</span>}
        <label>Fecha de Inicio:</label>
        <input
          type="date"
          placeholder="Fecha-inicio"
          {...register("fecha_inicio", { required: true })}
          defaultValue={obtenerFechaActual()}
          readOnly
        />
        <label>Producto:</label>
        <select
          {...register("nombre_producto", { required: true })}
          onChange={handleProductoChange}
        >
          <option value="">Seleccione un producto</option>
          {productos.map((producto) => (
            <option
              key={producto.nombre_producto}
              value={producto.nombre_producto}
            >
              {producto.nombre_producto}
            </option>
          ))}
        </select>
        {errors.nombre_producto && <span>Este campo es requerido</span>}
        <br />
        <label>Precio Producto</label>
        <input
          type="text"
          {...register("total_pagar", { required: true })}
          readOnly
          value={precioSeleccionado || ""}
        />
        {errors.total && <span>Este campo es requerido</span>}
        <label>Cantidad del Producto:</label>
        <input
          type="number"
          {...register("cantidad_producto", { required: true })}
          onChange={handleCantidadChange}
        />
        {errors.cantidad_producto && <span>Este campo es requerido</span>}
        <label>Total a Pagar</label>
        <input
          type="text"
          {...register("total", { required: true })}
          readOnly
          value={cantidad * precioSeleccionado || ""}

        />
        {errors.precio && <span>Este campo es requerido</span>}
        <br />
        <br />
        
       
        <label>Pagos Mensuales:</label>
        <input
          type="number"
          placeholder="Pagos Mensuales"
          {...register("pagos_mensuales", { required: true })}
        />
        {errors.nombre_completo && <span>Este campo es requerido</span>}

        <label>Meses diferidos:</label>
        <select {...register("meses_diferidos", { required: true })}>
          <option value="8">8 meses</option>
          <option value="12">12 meses</option>
          <option value="24">24 meses</option>
          <option value="36">36 meses</option>
        </select>
        {errors.meses_diferidos && <span>Este campo es requerido</span>}
        <br />
        <button>Guardar Cliente</button>
        {params.cedula && (
          <button
            className="btn btn-danger"
            onClick={async () => {
              const aceptar = window.confirm("Esta seguro de eliminar");
              if (aceptar) {
                await deleteCliente(params.cedula);
                navigate("/clientes");
              }
            }}
          >
            <i className="bi bi-trash"></i>
          </button>
        )}
      </form>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Productos en stock</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.nombre_producto}>
                <td>{producto.nombre_producto}</td>
                <td>{producto.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
