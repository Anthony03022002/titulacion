import { useEffect, useState } from "react";
import { getAllProductos } from "../api/productos.api";
import { ProductosCard } from "./ProductosCard";

export const ProductoList = () => {
    const [productos, setProductos] = useState([]);


    useEffect(()=>{
        async function loadProductos() {
           const res = await getAllProductos()
           setProductos(res.data)
        }
        loadProductos();
    },[]);

    return (
        <div >
            {productos.map(productos => (
                <ProductosCard  key={productos.nombre_producto} productos={productos} />
            ))}
        </div>
    );
}

