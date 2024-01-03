import { useForm } from "react-hook-form";
import { createPagos } from "../api/generarPago.api";
import { useNavigate, useLocation } from "react-router-dom";
import jsPDF from "jspdf";

export const GenerarPago = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const { cedulaCliente } = location.state || {};

  const onSubmit = handleSubmit(async (data) => {
    // Crear el pago
    await createPagos({ ...data, cedula: cedulaCliente });

    // Crear el PDF
    const pdf = new jsPDF();
    
    // Encabezado
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text("Formulario de Pago", 20, 20);

    // Contenido
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    pdf.text(`Fecha de Pago: ${data.fecha_pago}`, 20, 30);
    pdf.text(`Cédula: ${cedulaCliente}`, 20, 40);
    pdf.text(`Monto a Pagar: $${data.cantidad_pagada}`, 20, 50);

    // Estilos adicionales
    pdf.setLineWidth(0.5);
    pdf.line(20, 60, 190, 60); // Línea separadora

    // Guardar el PDF
    pdf.save("formulario_pago.pdf");

    // Redirigir a la página de clientes
    navigate('/clientes');
  });

  return (
    <div className="container">
      <div>
        <form onSubmit={onSubmit}>
          <h1>formulario de pago</h1>
          <input
            type="date"
            placeholder="fecha de pago"
            {...register("fecha_pago", { required: true })}
          />
          <input
            type="number"
            placeholder="cedula"
            value={cedulaCliente}
            readOnly
          />
          <input
            type="number"
            placeholder="Monto a pagar"
            {...register("cantidad_pagada", { required: true })}
          />
          <button type="submit">Guardar Pago</button>
        </form>
      </div>
    </div>
  );
};
