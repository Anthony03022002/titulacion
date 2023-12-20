import axios from 'axios'

const clienteApi = axios.create({
    baseURL: 'http://localhost:8000/productos/productos/'
})

export const getAllProductos = () => clienteApi.get('/')

export const createProductos = (productos) => clienteApi.post('/', productos);
