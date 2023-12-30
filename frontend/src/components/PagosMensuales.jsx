import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCliente } from '../api/clientes.api';

export const PagosMensuales = () => {
  const { cedula } = useParams();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({});
  const [error, setError] = useState(null);

  const handleGenerarPagoClick = () => {
    navigate(`/clientes/${cedula}/generarPago`);
  };

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        if (!cedula) {
          console.error('Cédula no definida');
          setError('Cédula no definida');
          return;
        }

        const response = await getCliente(cedula);
        setCliente(response.data);
      } catch (error) {
        console.error('Error al obtener cliente:', error);
        setError('Error al obtener cliente');
      }
    };

    fetchCliente();
  }, [cedula]);

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }
  return (
    <div className="container">
      <h2 className="mt-4 mb-4">{`Información del Cliente: ${cliente.nombre_completo || 'Cliente'}`}</h2>
      <ul className="list-group">
        <li className="list-group-item">{`Nombre Completo: ${cliente.nombre_completo || 'No disponible'}`}</li>
        <li className="list-group-item">{`Total a Pagar: ${cliente.total_pagar || 'No disponible'}`}</li>
        <li className="list-group-item">{`Pagos Mensuales: ${cliente.pagos_mensuales || 'No disponible'}`}</li>
      </ul>
      <button className="btn btn-primary mt-3" onClick={handleGenerarPagoClick}>Generar Pago</button>
    </div>
  );
};
