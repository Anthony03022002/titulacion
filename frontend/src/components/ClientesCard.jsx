// ClientesCard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ClientesCard = ({ clientes }) => {
  const navigate = useNavigate();

  const verDetalles = () => {
    // Navegar a la nueva ruta con el cédula del cliente
    navigate(`/clientes/${clientes.cedula}/detalles`, { state: { clienteDetalles: clientes } });
  };


  return (
    <div>
      <h4>cedula: {clientes.cedula}</h4>
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

