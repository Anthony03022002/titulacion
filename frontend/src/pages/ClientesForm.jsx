// En el archivo ClientesForm.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { createCliente } from '../api/clientes.api';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
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
      <form onSubmit={onSubmit}>
        <input
          type="number"
          placeholder="Ingrese su cedula"
          {...register("cedula", { required: true })}
        />
        {errors.cedula && <span>La cedula es requerida</span>}
        <input
          type="text"
          placeholder="Nombre Completo"
          {...register("nombre_completo", { required: true })}
        />
        {errors.nombre_completo && <span>Este campo es requerido</span>}
        <input
          type="email"
          placeholder="Correo electronico"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Este campo es requerido</span>}
        <input
          type="text"
          placeholder="Direccion"
          {...register("direccion", { required: true })}
        />
        {errors.direccion && <span>Este campo es requerido</span>}
        <button>Guardar Cliente</button>
      </form>
    </div>
  );
};
