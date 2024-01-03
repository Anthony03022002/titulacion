import { Link } from 'react-router-dom';

export const Navegacion = () => {

    const linkStyle = {
        position: 'absolute',
        right: '120px', 
        color: '#fff', 
        textDecoration: 'none', 
      };
      const linkStyles = {
        position: 'absolute',
        right: '260px', 
        color: '#fff', 
        textDecoration: 'none', 
      };
      const contenedorStyle = {
        padding: '35px',
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
      };
    
      const navStyle = {
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: '#333', 
        padding: '10px 20px', 
      };
    
      return (
        <div>
          <nav style={navStyle}>
            <h1 style={{ margin: '0', color: '#fff' }}>Aplicación de Pagos</h1>
            <div>
              <Link to="/productos" style={linkStyle}>
                Productos
              </Link>
              <Link to="/clientes" style={linkStyles}>
                Clientes
              </Link>
              <a href="http://127.0.0.1:8000/" >
                   Cerrar Sesión
              </a>
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
                <Link to="/pagos" className="btn btn-dark" role="button">
                    Pagos
                </Link>
                <Link to="/crear-pagos" className="btn btn-dark" role="button">
                    crearPagos
                </Link>


            </div>
        </div>
    );
};
