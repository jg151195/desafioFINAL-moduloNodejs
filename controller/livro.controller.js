import livroServices from '../services/livro.services.js'

const controller = {

    async createLivro(req, res) {
        try {
            const livro = req.body
            if (!livro.nome || !livro.valor || !livro.estoque || !livro.autor_id) {
                throw new Error("Nome, valor, estoque, Id do autorsão obrigatorios");
            }
            res.send(await livroServices.createLivro(livro));
        } catch(err){
            throw new Error(err);
        }
    },

    async updateLivro(req, res) {
        const livro = req.body
        if (!livro.nome || !livro.valor || !livro.estoque || !livro.autor_id) {
            throw new Error("Nome, valor, estoque, Id do autorsão obrigatorios");
        }
        res.send(await livroServices.updateLivro(livro));
    },

    async deleteLivro(req, res) {
        
        if(!req.params){
            throw new Error("Id do livro necessário");
        }
        res.send(await livroServices.deleteLivro(req.params));
    },

    async getAllLivros(req, res) {
        res.send(await livroServices.getAllLivros());
    },

    async getLivro(req, res) {
        if(!req.params){
            throw new Error("Id do livro necessário");
        }
        res.send(await livroServices.getLivro(req.params));
    }
}

export default controller;