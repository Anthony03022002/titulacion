// En tu archivo ClientesForm.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { createCliente } from '../api/clientes.api';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import './ClientesForm.css'; // Importa tu archivo CSS

export const ClientesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await createCliente(data);
    navigate('/clientes');
  });

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

        <label>Producto:</label>
        <input
          type="text"
          placeholder="Produto"
          {...register("nombre_producto", { required: true })}
        />

        <label>Fecha de Inicio:</label>
        <input
          type="text"
          placeholder="Fecha-inicio"
          {...register("fecha_inicio", { required: true })}
        />  

        {/* Comenta la línea siguiente para ocultar el campo "Cantidad" */}
        {/* <input type="text" placeholder="Cantidad" {...register("cantidad", { required: true })} />  */}

        <button>Guardar Cliente</button>
      </form>
    </div>
  );
};
