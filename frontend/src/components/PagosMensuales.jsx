import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCliente } from "../api/clientes.api";
import { getAllPagos } from "../api/generarPago.api";

export const PagosMensuales = () => {
  const { cedula } = useParams();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({});
  const [error, setError] = useState(null);
  const [pagos, setPagos] = useState([]);

  const handleGenerarPagoClick = () => {
    navigate(`/clientes/${cedula}/generarPago`);
  };
  useEffect(() => {
    async function loadPagos() {
      const res = await getAllPagos();
      const pagosCliente = res.data.filter(
        (pago) => pago.cedula === cliente.cedula
      );
      setPagos(pagosCliente);
    }
    loadPagos();
  }, [cliente.cedula]);

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        if (!cedula) {
          console.error("Cédula no definida");
          setError("Cédula no definida");
          return;
        }

        const response = await getCliente(cedula);
        setCliente(response.data);
      } catch (error) {
        console.error("Error al obtener cliente:", error);
        setError("Error al obtener cliente");
      }
    };

    fetchCliente();
  }, [cedula]);

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }
  return (
    <div className="container">
      <h1 className="text-center">Pagos Mensuales</h1>
      <h2 style={{ textTransform: "uppercase" }}>
        Cliente: {cliente.nombre_completo}
      </h2>
      <p style={{ textTransform: "uppercase" }}>
        Producto: {cliente.nombre_producto}
      </p>
      <p>Total a Pagar: {cliente.total_pagar}</p>
      <p>Meses diferidos: {cliente.meses_diferidos}</p>
      {/* <table className="table">
        <thead>
          <tr>
            <th scope="col">Cedula</th>
            <th scope="col">Pagos Mensuales</th>
            <th scope="col">Fecha Vencimiento</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{cliente.cedula}</td>
            <td>{cliente.pagos_mensuales}</td>
            <td>{cliente.vencimiento}</td>
            <td>{cliente.estado}</td>
          </tr>
        </tbody>
      </table> */}
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Cedula</th>
            <th scope="col">Pagos Mensuales</th>
            <th scope="col">Fecha de Pago</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {pagos.map((pago) => (
            <tr key={pago.id}>
              <td>{pago.cedula}</td>
              <td>{cliente.pagos_mensuales}</td>
              <td>{pago.fecha_pago}</td>
              <td>{cliente.estado}</td>
            </tr>
          ))}
        </tbody>
        <button className="btn btn-primary mt-3" onClick={handleGenerarPagoClick}>
        Generar Pago
      </button>
      </table>
    </div>
  );
};
