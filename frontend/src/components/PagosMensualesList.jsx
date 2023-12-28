import { useEffect, useState } from "react";
import { getAllPagos } from "../api/pagosMensuales.api";


export const PagosMensualesList = () => {
    const [pagosMensuales, setPagos] = useState([]);


    useEffect(()=>{
        async function loadPagos() {
          const res = await getAllPagos()
          setPagos(res.data)
            
        }
        loadPagos()
    },[])



    return (
    <div className="App">
    <div className="row mt-3">
      <div className="col-12 col-lg-8 offset-0 offset-lg-2">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID Pagos</th>
                <th>Vencimiento</th>
                <th>Estado</th>
                <th>Total a cobrar</th>
                <th>Fecha Inicio</th>
                <th>Cedula</th>
                <th>Planes</th>
                <th>Cajero</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {pagosMensuales.map((pagosMensuales) => (
                <tr key={pagosMensuales.pagos_mensuales}>
                  <td>{pagosMensuales.pagos_mensuales}</td>
                  <td>{pagosMensuales.vencimiento}</td>
                  <td>{pagosMensuales.estado}</td>
                  <td>{pagosMensuales.total_cobrar}</td>
                  <td>{pagosMensuales.fecha_inicio}</td>
                  <td>{pagosMensuales.cedula}</td>
                  <td>{pagosMensuales.planes}</td>
                  <td>{pagosMensuales.User}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
        
    );
}

