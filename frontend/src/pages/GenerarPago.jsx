import { useForm } from "react-hook-form";
import { createPagos } from "../api/generarPago.api";
import { useNavigate } from "react-router-dom";

export const GenerarPago = () => {

  const { register, handleSubmit } = useForm();

    const navigate = useNavigate()

    const onSubmit = handleSubmit(async data => {
        await createPagos(data)
        navigate('/pagos')
      
    })
  return (
    <div className="container">
      <div>
            <form onSubmit={onSubmit} >
                <input type="date" placeholder="fecha de pago"
                {...register("fecha_pago", {register: true})}
                />
                <input type="number" placeholder="cedula"
                {...register("cedula", {register: true})}
                />
                <button>Guardar Pago</button>
            </form>
        </div>
      
    </div>
  );
};
