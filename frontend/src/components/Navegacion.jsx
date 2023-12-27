import { Link } from "react-router-dom";

export const Navegacion = () => {
    return (
        <div>
            <Link to="/clientes"><p>Clientes</p></Link>
            <Link to="/crear-clientes"><p>Crear Cliente</p></Link>
            <Link to="/productos"><p>Productos</p></Link>
            <Link to= "/crear-producto"><p>Crear Producto</p></Link>
            <Link to= "/pagosMensuales"><p>Pagos mensuales</p></Link>
            <Link to= "/crear-pagos"><p>Crear Pago mensual</p></Link>
        </div>
    );
}







