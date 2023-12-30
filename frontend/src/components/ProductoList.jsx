import { useEffect, useState } from "react";
import { getAllProductos } from "../api/productos.api";
import { useNavigate } from "react-router-dom";

export const ProductoList = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProductos() {
      const res = await getAllProductos();
      setProductos(res.data);
    }
    loadProductos();
  }, []);

  return (
    // <div >
    //     {productos.map(productos => (
    //         <ProductosCard  key={productos.nombre_producto} productos={productos} />
    //     ))}
    <div className="App">
      <div className="row mt-3">
        <div className="col-12 col-lg-8 offset-0 offset-lg-2">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Nombre del producto</th>
                  <th>Precio</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {productos.map((producto) => (
                  <tr key={producto.nombre_producto}>
                    <td>{producto.nombre_producto}</td>
                    <td>{producto.precio}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          navigate(`/productos/${producto.nombre_producto}`);
                        }}
                      >
                        <i class="bi bi-pencil"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
