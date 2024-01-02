import { useForm } from "react-hook-form";
import {
  createPagos,
  deletePagos,
  updatePagos,
  getPago,
} from "../api/generarPago.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export const PagosForm = () => {
  const { register, handleSubmit, setValue } = useForm();

  const params = useParams();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
        await updatePagos(params.id, data)
    } else {
      await createPagos(data);
    }
    navigate("/pagos");
  });
  useEffect(() => {
    async function loadPago() {
      if (params.id) {
       const res = await getPago(params.id);
       setValue('cedula', res.data.cedula)
       setValue('fecha_pago', res.data.fecha_pago)
      }
    }
    loadPago();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="date"
          placeholder="fecha de pago"
          {...register("fecha_pago", { register: true })}
        />
        <input
          type="number"
          placeholder="cedula"
          {...register("cedula", { register: true })}
        />
        <button>Guardar Pago</button>
        {params.id && (
          <button
            onClick={async () => {
              const aceptar = window.confirm("Esta seguro de eliminar");
              if (aceptar) {
                await deletePagos(params.id);
                navigate("/pagos");
              }
            }}
          >
            Eliminar
          </button>
        )}
      </form>
    </div>
  );
};
