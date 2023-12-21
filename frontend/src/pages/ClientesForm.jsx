// En el archivo ClientesForm.jsx
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { createCliente, deleteCliente, updateCliente, getCliente } from '../api/clientes.api';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import './ClientesForm.css'; // Importa tu archivo CSS

export const ClientesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if(params.cedula){
      await updateCliente(params.cedula, data)
    }else{
      await createCliente(data);
    }
    navigate('/clientes');

  });

  useEffect(()=>{
    async function loadCliente(){
      if (params.cedula) {  
       const { data } = await getCliente(params.cedula);
      setValue('cedula', data.cedula);
      setValue('nombre_completo', data.nombre_completo);
      setValue('email', data.email);
      setValue('direccion', data.direccion);
      setValue('fecha_inicio', data.fecha_inicio);
      setValue('nombre_producto', data.nombre_producto);
      }
    }
    loadCliente();
  },[]);




  const breadcrumbsPaths = ['Home', 'Clientes', 'Nuevo Cliente'];

  return (
    <div>
      <Breadcrumbs paths={breadcrumbsPaths} />
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
        />  
        <label>Producto:</label>
        <input
          type="text"
          placeholder="Produto"
          {...register("nombre_producto", { required: true })}
        />

        
        {/* Comenta la línea siguiente para ocultar el campo "Cantidad" */}
        {/* <input type="text" placeholder="Cantidad" {...register("cantidad", { required: true })} />  */}

        <button>Guardar Cliente</button>
        {params.cedula && <button onClick={async()=>{
        const aceptar = window.confirm('Esta seguro de eliminar')
        if(aceptar){
          await deleteCliente(params.cedula)
          navigate('/clientes')
        }
      }}>Eliminar</button>}
      </form>

      

    </div>
  );
};
