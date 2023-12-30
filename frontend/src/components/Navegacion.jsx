import { Link } from 'react-router-dom';

export const Navegacion = () => {

    const linkStyle = {
        position: 'absolute',
        right: '35px', // Alinea el enlace a la derecha
        color: '#fff', // Color del texto en los enlaces
        textDecoration: 'none', // Quitamos la decoración predeterminada del enlace
    };
    const linkStyles = {
        position: 'absolute',
        right: '200px', // Alinea el enlace a la derecha
        color: '#fff', // Color del texto en los enlaces
        textDecoration: 'none', // Quitamos la decoración predeterminada del enlace
    };
    const contenedorStyle = {
        padding: '35px',
        display: 'flex',
        flexDirection: 'column', // Cambiamos la dirección para apilar elementos verticalmente
        alignItems: 'center', // Centramos horizontalmente el contenido
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between', // Espacio uniforme entre elementos
        alignItems: 'center',
        backgroundColor: '#333', // Color de fondo para la barra de navegación
        padding: '10px 20px', // Añadimos relleno para los enlaces
    };

    return (
        <div>
            <nav style={navStyle}>
                <h1 style={{ margin: '0', color: '#fff' }}>Aplicación de Pagos</h1>
                <div>
                    <Link to="/productos" style={linkStyle}>Productos</Link>
                    <Link to="/clientes" style={linkStyles}>Clientes</Link>

                </div>
            </nav>
            <div style={contenedorStyle}>

                {/* Subtítulo debajo del título */}
                <Link to="/crear-clientes" className="btn btn-dark" role="button" style={linkStyles}>
                    Crear Cliente
                </Link>
                <Link to="/crear-producto" className="btn btn-dark" role="button" style={linkStyle}>
                    Crear Producto
                </Link>


            </div>
        </div>
    );
};
