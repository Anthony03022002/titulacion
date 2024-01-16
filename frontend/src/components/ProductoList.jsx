import { useEffect, useState } from "react";
import { getAllProductos } from "../api/productos.api";
import { useNavigate } from "react-router-dom";

export const ProductoList = () => {
  const [productos, setProductos] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(7); // Número de elementos por página
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProductos() {
      const res = await getAllProductos();
      setProductos(res.data);
    }
    loadProductos();
  }, []);

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentProductos = productos
    .filter(producto =>
      producto.nombre_producto.toLowerCase().includes(filtroNombre.toLowerCase())
    )
    .slice(
    indexOfFirstElement,
    indexOfLastElement
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const linkStyle = {
    backgroundColor: '#3c6d79',
  } 

  return (
    // <div className="App">
    //   <div className="row mt-3">
    //     <div className="col-12 col-lg-8 offset-0 offset-lg-2">
    //       <div className="table-responsive">
    //         <table className="table table-bordered">
    //           <thead>
    //             <tr>
    //               <th>Nombre del producto</th>
    //               <th>Precio</th>
    //               <th>Accion</th>
    //             </tr>
    //           </thead>
    //           <tbody className="table-group-divider">
    //             {currentProductos.map((producto) => (
    //               <tr key={producto.nombre_producto}>
    //                 <td>{producto.nombre_producto}</td>
    //                 <td>{producto.precio}</td>
    //                 <td>
    //                   <button
    //                     className="btn btn-warning"
    //                     onClick={() => {
    //                       navigate(`/productos/${producto.nombre_producto}`);
    //                     }}
    //                   >
    //                     <i className="bi bi-pencil"></i>
    //                   </button>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //       <nav>
    //         <ul className="pagination">
    //           {Array.from({ length: Math.ceil(productos.length / elementsPerPage) }, (_, i) => (
    //             <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
    //               <button className="page-link" onClick={() => paginate(i + 1)}>
    //                 {i + 1}
    //               </button>
    //             </li>
    //           ))}
    //         </ul>
    //       </nav>
    //     </div>
    //   </div>
    // </div>
    <div className="container">
      <h2>Productos</h2>
      <table className="table table-striped table-hover" style={{
        borderCollapse: 'separate',
        borderSpacing: '1px',
        border: '1px solid white',
        borderRadius: '15px',
        MozBorderRadius: '20px',
        padding: '2px',
      }}>
        <thead>
          <tr>
            <th scope="col">Nombre del producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {currentProductos.map((producto) => (
            <tr key={producto.nombre_producto}>
              <td>{producto.nombre_producto}</td>
              <td>{producto.precio}</td>
              <td>
                <button
                 className="btn" role="button" style={linkStyle}
                  onClick={() => {
                    navigate(`/productos/${producto.nombre_producto}`);
                  }}
                >
                   <i className="bi bi-pencil" style={{ color: '#f9ae65' }}></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(productos.length / elementsPerPage) }, (_, i) => (
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
