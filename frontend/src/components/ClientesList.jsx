import { useEffect, useState } from "react";
import { getAllClientes } from "../api/clientes.api";
import { Link, useNavigate } from "react-router-dom";

export const ClientesList = () => {
  const [clientes, setClientes] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage,] = useState(3); // Número de elementos por página
  const navigate = useNavigate();

  useEffect(() => {
    const cargarClientes = async () => {
      try {
        const res = await getAllClientes();
        setClientes(res.data);
      } catch (error) {
        console.error("Error al cargar clientes:", error);
      }
    };
    cargarClientes();
  }, []);

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentClientes = clientes
    .filter(cliente =>
      cliente.nombre_completo.toLowerCase().includes(filtroNombre.toLowerCase())
    )
    .slice(indexOfFirstElement, indexOfLastElement);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <div className="container">
      <div className="mb-3" >
        <label htmlFor="filtroNombre" className="form-label"><h4 style={{  color: '#fff' }}>Buscar Cliente:</h4></label>
        <input
          type="text"
          className="form-control"
          id="filtroNombre"
          value={filtroNombre}
          onChange={(e) => setFiltroNombre(e.target.value)}
        />
      </div>
      <h2 style={{ color: '#fff' }}>Clientes</h2>
      <table className="table table-bordered table-dark table-striped" >
        <thead >
          <tr>
            <th scope="col">Cedula</th>
            <th scope="col">Nombre Completo</th>
            <th scope="col">Meses diferidos</th>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad del Producto</th>
            <th scope="col">Total a Pagar</th>
            <th scope="col">Pagos Mensuales</th>
            <th scope="col">Vencimiento</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentClientes.map((cliente) => (
            <tr key={cliente.cedula}>
              <td>{cliente.cedula}</td>
              <td>{cliente.nombre_completo}</td>
              <td>{cliente.meses_diferidos}</td>
              <td>{cliente.nombre_producto}</td>
              <td>{cliente.cantidad_producto}</td>
              <td>{cliente.total_pagar}</td>
              <td>{cliente.pagos_mensuales}</td>
              <td>{cliente.vencimiento}</td>
              <td>
                <button className="btn btn-info">
                  <Link to={`/clientes/${cliente.cedula}/pagosMensuales`}>
                    <i className="bi bi-file-earmark-person-fill"></i>
                  </Link>
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate(`/clientes/${cliente.cedula}`)}
                >
                  <i className="bi bi-pencil"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(clientes.length / elementsPerPage) }, (_, i) => (
            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
