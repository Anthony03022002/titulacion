import { useEffect, useState } from "react";
import { getAllPagos } from "../api/generarPago.api";
import { useNavigate } from "react-router-dom";


export const PagosList = () => {
    const [pagos, setPagos] =useState([]);
    const navigate = useNavigate();


    useEffect(()=>{
        async function loadPagos() {
         const res = await getAllPagos()
         setPagos(res.data)
        }
        loadPagos()
      },[])
    return (
        <div>
           {pagos.map(pago=>(
            <div key={pago.id}>
                <p>Id:{pago.id}</p>
                 <p>Fechas pago: {pago.fecha_pago}</p>
                 <p>Cedula Cliente: {pago.cedula}</p>
                 <p>Accion
                    <button
                        onClick={()=>{
                            navigate(`/pagos/${pago.id}`)
                        }}
                    >ver</button>
                 </p>
                 <hr />
            </div>
           ))}
        </div>
    );
}

