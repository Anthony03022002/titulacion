import { useEffect, useState } from "react";
import { getAllPagos } from "../api/generarPago.api";
import { useNavigate } from "react-router-dom";

export const PagosList = () => {
  const [pagos, setPagos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadPagos() {
      const res = await getAllPagos();
      setPagos(res.data);
    }
    loadPagos();
  }, []);
  return (
    // <div>
    //    {pagos.map(pago=>(
    //     <div key={pago.id}>
    //         <p>Id:{pago.id}</p>
    //          <p>Fechas pago: {pago.fecha_pago}</p>
    //          <p>Cedula Cliente: {pago.cedula}</p>
    //          <p>Cantidad pagada: {pago.cantidad_pagada}</p>
    //          <p>Accion
    //             <button
    //                 onClick={()=>{
    //                     navigate(`/pagos/${pago.id}`)
    //                 }}
    //             >ver</button>
    //          </p>
    //          <hr />
    //     </div>
    //    ))}
    // </div>
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Cedula</th>
            <th scope="col">Fecha Pago</th>
            <th scope="col">Monto Pagado</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          {pagos.map((pago) => (
            <tr key={pago.id}>
              <td>{pago.id}</td>
              <td>{pago.cedula}</td>
              <td>{pago.fecha_pago}</td>
              <td>{pago.cantidad_pagada}</td>
              <td>
                <button className="btn btn-warning"
                  onClick={() => {
                    navigate(`/pagos/${pago.id}`);
                  }}
                >
                  <i className="bi bi-pencil"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
