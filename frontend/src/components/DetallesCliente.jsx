import { useLocation } from "react-router-dom";

export const DetallesCliente = () => {
  const location = useLocation();
  const clientesdet = location.state?.clienteDetalles;

  if (!clientesdet) {
    return <div>No hay detalles del cliente disponibles.</div>;
  }

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Pagos Mensuales</h1>
      <h2>Cliente: {clientesdet.nombre_completo.toUpperCase()}</h2>
      <p>Cedula: {clientesdet.cedula}</p>
      <p>Producto: {clientesdet.nombre_producto.toUpperCase()}</p>
      <p>Pagos Mensuales: {clientesdet.pagos_mensuales}</p>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Cedula</th>
            <th scope="col">Pagos Mensuales</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">{clientesdet.cedula}</td>
            <td>{clientesdet.pagos_mensuales}</td>
            <td>
              <button>Generar Pago</button>
            </td>
          </tr>
        </tbody>
      </table>
     
    </div>
  );
};
