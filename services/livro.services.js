import livroRepository from '../repository/livro.repository.js'
import livroInfoRepository from '../repository/livroInfo.repository.js'

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
    },

    async  createLivroInfo (livroInfo){
        const livro = await this.getLivro(livroInfo.livroId);
        const info = await livroInfoRepository.getLivroInfo(parseInt(livroInfo.livroId))
        if(livro.length == 0 || info){
            throw new Error('Livro não existe ou já possui info');
        }
        return await livroInfoRepository.createLivroInfo(livroInfo);
    },
    async  updateLivroInfo (livroInfo){
        const livro = this.getLivro(livroInfo.livro_id);
        if (livro.length == 0){
            throw new Error('Livro não existe');
        }

        return await livroInfoRepository.updateLivroInfo(livroInfo);
    },

    async deleteLivroInfo(id){
        return await livroInfoRepository.deleteLivroInfo(id);
    },
    async createAvaliacao(avaliacao,id){
        return await livroInfoRepository.createAvaliacao(avaliacao,id);
    }
}
export default services;