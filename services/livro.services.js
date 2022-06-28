import livroRepository from '../repository/livro.repository.js'
const services = {
    async  createLivro (livro){
        return await livroRepository.createLivro(livro);
    },
    
    async  updateLivro (livro){
        return await livroRepository.updateLivro(livro);
    },
    
    async  deleteLivro (livroId){
        return await livroRepository.deleteLivro(livroId);
    },
    
    async  getAllLivros (){
        return await livroRepository.getAllLivros();
    },
    
    async  getLivro (livroId){
        return await livroRepository.getLivro(livroId);
    }
}
export default services;