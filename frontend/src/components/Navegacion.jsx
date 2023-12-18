import { Link } from "react-router-dom";

export const Navegacion = () => {
    return (
        <div>
            
            <Link to="/clientes"><h1>Aplicación de pagos</h1></Link>
            <Link to="/crear-clientes">Crear Cliente</Link>
        </div>
    );
}







