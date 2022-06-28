import autorRepository from '../repository/autor.repository.js'

const services = {
    async  createAutor (autor){
        return await autorRepository.createAutor(autor);
    },
    
    async  updateAutor (autor){
        return await autorRepository.updateAutor(autor);
    },
    
    async  deleteAutor (autorId){
        return await autorRepository.deleteAutor(autorId);
    },
    
    async  getAllAutors (){
        return await autorRepository.getAllAutores();
    },
    
    async  getAutor (autorId){
        return await autorRepository.getAutor(autorId);
    }
}
export default services;