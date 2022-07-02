import clienteRepository from '../repository/cliente.repository.js'

const services = {
    async  createCliente (cliente){
        return await clienteRepository.createCliente(cliente);
    },
    
    async  updateCliente (cliente){
        return await clienteRepository.updateCliente(cliente);
    },
    
    async  deleteCliente (clienteId){
        return await clienteRepository.deleteCliente(clienteId);
    },
    
    async  getAllClientes (){
        return await clienteRepository.getAllClientes();
    },
    
    async  getCliente (clienteId){
        return await clienteRepository.getCliente(clienteId);
    }
}
export default services