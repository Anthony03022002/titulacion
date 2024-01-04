import { Link } from 'react-router-dom';

export const Navegacion = () => {

  const linkStyle = {
    backgroundColor: '#17494d', // Cambia el color de fondo del botón
    position: 'absolute',
    right: '35px', // Alinea el enlace a la derecha
    color: '#fff', // Color del texto en los enlaces
    textDecoration: 'none', // Quitamos la decoración predeterminada del enlace
  };
  const linkStyles = {
    backgroundColor: '#17494d', // Cambia el color de fondo del botón
    position: 'absolute',
    right: '350px', // Alinea el enlace a la derecha
    color: '#fff', // Color del texto en los enlaces
    textDecoration: 'none', // Quitamos la decoración predeterminada del enlace
  };

  const linkStylew = {
    backgroundColor: '#17494d', // Cambia el color de fondo del botón
    color: '#fff', // Cambia el color del texto del botón
    position: 'absolute',
    right: '200px', // Alinea el enlace a la derecha
    textDecoration: 'none', // Quitamos la decoración predeterminada del enlace
  };
// estilos links 
const linkStyle1 = {
  
  position: 'absolute',
  right: '35px', // Alinea el enlace a la derecha
  color: '#06363d', // Color del texto en los enlaces
  textDecoration: 'none', // Quitamos la decoración predeterminada del enlace
};
const linkStyle3 = {
  
  position: 'absolute',
  right: '350px', // Alinea el enlace a la derecha
  color: '#06363d', // Color del texto en los enlaces
  textDecoration: 'none', // Quitamos la decoración predeterminada del enlace
};

const linkStyle2 = {
 
  color: '#06363d', // Cambia el color del texto del botón
  position: 'absolute',
  right: '200px', // Alinea el enlace a la derecha
  textDecoration: 'none', // Quitamos la decoración predeterminada del enlace
};

//
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
    background: '#d6eef2',
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
    color: '#06363d'
  }

  return (
    <div>
      <nav style={navStyle}>
        <Link to="/" style={backPage}><i className="bi bi-arrow-left" style={iconStyle}></i></Link>
        <h1 style={{ margin: '30', color: '#06363d' }}>Aplicación de Pagos</h1>
        <div>
          <Link to="/productos" style={linkStyle2}>
            Productos
          </Link>
          <Link to="/clientes" style={linkStyle3}>
            Clientes
          </Link >
          <a style={linkStyle1} href="http://127.0.0.1:8000/" >
            Cerrar Sesión
          </a>
        </div>
      </nav>
      <div style={contenedorStyle}>

        {/* Subtítulo debajo del título */}
        <Link to="/crear-clientes" className="btn btn-secondary" role="button" style={linkStyles}>
          Crear Cliente
        </Link>
        <Link to="/crear-producto" className="btn btn-secondary" role="button" style={linkStyle}>
          Crear Producto
        </Link>

        <Link to="/crear-pagos" className="btn" role="button" style={linkStylew}>
          Crear Pagos
        </Link>

      </div>
    </div>
  );
};
