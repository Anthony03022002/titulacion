export const ClientesCard = ({clientes}) => {
  return (
    // <table>
    //   <thead><th>{clientes.cedula}</th></thead>
    //   <th>{clientes.nombre_completo}</th>
    //   <th>{clientes.email}</th>
    //   <th>{clientes.direccion}</th>
    //   <th>{clientes.nombre_producto}</th>
    //   <hr />
    // </table>
    <table class ="table table-striped">
      <thead>
        <tr>
          <th scope="col">cedula</th>
          <th scope="col">nombre_completo</th>
          <th scope="col">email</th>
          <th scope="col">direccion</th>
          <th scope="col">Producto</th>
          <th scope="col">Fecha-inicio</th>
          <th scope="col">Cantidad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{clientes.cedula}</th>
          <td>{clientes.nombre_completo}</td>
          <td >{clientes.email}</td>
          <td>{clientes.direccion}</td>
          <td>{clientes.nombre_producto}</td>
          <td>{clientes.fecha_inicio}</td>
          <td>{clientes.cantidad}</td>

        </tr>
      </tbody>
    </table>
  );
};
