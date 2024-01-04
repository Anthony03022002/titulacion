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
    right: '350px', // Alinea el enlace a la derecha
    color: '#fff', // Color del texto en los enlaces
    textDecoration: 'none', // Quitamos la decoración predeterminada del enlace
};

const linkStylew = {
    position: 'absolute',
    right: '200px', // Alinea el enlace a la derecha
    color: '#fff', // Color del texto en los enlaces
    textDecoration: 'none', // Quitamos la decoración predeterminada del enlace
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
        background: 'linear-gradient(90deg, rgba(0,172,217,1) 0%, rgba(16,129,218,1) 50%, rgba(0,172,217,1) 100%)',
        padding: '10px 20px', // Añadimos relleno para los enlaces
    };
    const backPage = {
      marginRight: '10px',
      padding: '5px',
      color: '#fff',
      textDecoration: 'none',
      border: 'none',
      borderRadius: '5px',
  };

  const iconStyle = {
      fontSize: '1.5rem', // Tamaño del ícono
  }
  
    return (
        <div>
          <nav style={navStyle}>
          <Link to="/" style={backPage}><i className="bi bi-arrow-left" style={iconStyle}></i></Link>
                <h1 style={{ margin: '30', color: '#fff' }}>Aplicación de Pagos</h1>
            <div>
              <Link to="/productos" style={linkStylew}>
                Productos
              </Link>
              <Link to="/clientes" style={linkStyles}>
                Clientes
              </Link >
              <a style={linkStyle} href="http://127.0.0.1:8000/" >
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

                <Link to="/crear-pagos" className="btn btn-dark" role="button" style={linkStylew}>
                    Crear Pagos
                </Link>

            </div>
        </div>
    );
};
