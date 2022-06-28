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
    }, 
    
    // async  createAutor (){
    //     return
    // },
    
    // async  updateAutor (){
    //     return
    // },
    
    // async  deleteAutor (){
    //     return
    // },
    
    // async  getAllAutor (){
    //     return
    // },
    
    // async  getAutor (){
    //     return
    // },
    
    
    
    // async  createLivro (){
    //     return
    // },
    
    // async  updateLivro (){
    //     return
    // },
    
    // async  deleteLivro (){
    //     return
    // },
    
    // async  getLivro (){
    //     return
    // },
    
    // async  getAllLivro (){
    //     return
    // },
    
    
    // async  getLivroFromAutor (){
    //     return
    
    // },
    
    // async  createLivroInfo (){
    //     return
    // },
    
    // async  deleteLivroInfo (){
    //     return
    // },
    
    // async  createAvaliacao (){
    //     return
    // },

    // async  deleteAvaliacao (){
    //     return
    // },
    
    
    // async  createVenda (){
    //     return
    // },

    // async  getVenda (){
    //     return
    // },
    
    // async  getAllVenda (){
    //     return
    // },
    
    
    // async  getVendaFromCliente (){
    //     return
    // },
    
    // async  getVendaFromLivro (){
    //     return
    // },
    
    // async  getVendaFromAutor (){
    //     return
    // }
}
export default services