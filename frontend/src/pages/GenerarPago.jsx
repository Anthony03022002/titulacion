import { useForm } from "react-hook-form";
import { createPagos } from "../api/generarPago.api";
import { useNavigate, useLocation } from "react-router-dom";
import jsPDF from "jspdf";

export const GenerarPago = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { cedulaCliente, pagosMensuales } = location.state || {};

  const onSubmit = handleSubmit(async (data) => {
    await createPagos({ ...data, cedula: cedulaCliente });

    const pdf = new jsPDF();

    // Encabezado
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text("Comprobante de Pago", 20, 20);

    // Contenido principal
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    pdf.text(`Pago realizado por el valor de: $${data.cantidad_pagada}`, 20, 40);
    pdf.text(`Fecha de Pago: ${data.fecha_pago}`, 20, 55);

    // Línea divisoria
    pdf.setLineWidth(0.5);
    pdf.line(20, 70, 190, 70);

    // Detalles de la tabla
    const yStart = 80;
    const yOffset = 10;

    pdf.text("Cédula", 20, yStart);
    pdf.text("Pago Mensual", 60, yStart);
    pdf.text("Monto Pagado", 100, yStart);
    pdf.text("Fecha de Pago", 160, yStart);

    pdf.text(cedulaCliente.toString(), 20, yStart + yOffset);
    pdf.text(`$${pagosMensuales}`, 60, yStart + yOffset);
    pdf.text(`$${data.cantidad_pagada}`, 100, yStart + yOffset);
    pdf.text(data.fecha_pago, 160, yStart + yOffset);

    // Guardar el PDF
    pdf.save("Comprobante_de_pago.pdf");

    // Redirigir a la página de pagos mensuales
    navigate(`/clientes/${cedulaCliente}/pagosMensuales`);
  });

  return (
    <div className="container">
      <div>
        <form onSubmit={onSubmit}>
          <h1>Formulario de Pago</h1>
          <h3>Pago Mensual: ${pagosMensuales}</h3>
          <input
            type="date"
            placeholder="Fecha de pago"
            {...register("fecha_pago", { required: true })}
          />
          <input
            type="number"
            placeholder="Cédula"
            value={cedulaCliente}
            readOnly
          />
          <input
            type="text"
            placeholder="Monto Pagado"
            {...register("cantidad_pagada", {
              required: true,
              pattern: /^[0-9]+(\.[0-9]{1,2})?$/, // Acepta números con hasta 2 decimales
            })}
          />
          <button type="submit">Guardar Pago</button>
        </form>
      </div>
    </div>
  );
};
