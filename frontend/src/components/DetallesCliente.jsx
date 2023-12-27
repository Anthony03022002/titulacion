import React from "react";
import { useLocation } from "react-router-dom";
import "./DetallesCliente.css"; // Importa tus estilos CSS aquí

 export const DetallesCliente = () => {
  const location = useLocation();
  const clientesdet = location.state?.clienteDetalles;

  if (!clientesdet) {
    return <div>No hay detalles del cliente disponibles.</div>;
  }

  

    return (
      <div>
         <h2>Detalles del Cliente</h2>
          <table className="detalles-table">
            <tbody>
              <tr>
                <td>Cédula:</td>
                <td>{clientesdet.cedula}</td>
              </tr>
              <tr>
                <td>Nombre Completo:</td>
                <td>{clientesdet.nombre_completo}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{clientesdet.email}</td>
              </tr>
              <tr>
                <td>Direccion:</td>
                <td>{clientesdet.direccion}</td>
              </tr>
              <tr>
                <td>Fecha Inicio:</td>
                <td>{clientesdet.fecha_inicio}</td>
              </tr>
              <tr>
                <td>Producto:</td>
                <td>{clientesdet.nombre_producto}</td>
              </tr>
              <tr>
                <td>Cantidad del Producto:</td>
                <td>{clientesdet.cantidad_producto}</td>
              </tr>
              <tr>
                <td>Pagos Mensuales:</td>
                <td>{clientesdet.pagos_mensuales}</td>
              </tr>
              <tr>
                <td>Meses diferidos:</td>
                <td>{clientesdet.meses_diferidos}</td>
              </tr>
              <tr>
                <td>Total a Pagar:</td>
                <td>{clientesdet.total_pagar}</td>
              </tr>
            {/* Agrega más detalles según sea necesario */}
          </tbody>
        </table>
      </div>
    );
  };
  
  
  