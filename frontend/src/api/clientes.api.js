import axios from 'axios'

const clienteApi = axios.create({
    baseURL: 'http://localhost:8000/clientes/clientes/'
})

export const getAllClientes = () => clienteApi.get('/')

export const createCliente = (clientes) => clienteApi.post('/', clientes);
