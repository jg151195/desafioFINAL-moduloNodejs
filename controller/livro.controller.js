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
        const {id} = req.params
        res.send(await livroServices.getLivro(id));
    },
    async createLivroInfo(req,res){
        const livroInfo = req.body
        if(!livroInfo.descricao || !livroInfo.paginas || !livroInfo.editora || !livroInfo.avaliacoes){
            res.send("Faltam dados.")
        }
        res.send(await livroServices.createLivroInfo(livroInfo));
    },
    async updateLivroInfo(req,res){
        const livroInfo = req.body
        if(!livroInfo.descricao || !livroInfo.paginas || !livroInfo.editora || !livroInfo.avaliacoes ||!livroInfo.livro_id ){
            res.send("Faltam dados.")
        }
        res.send(await livroServices.updateLivroInfo(livroInfo));
    },
    async deleteLivroInfo(req,res){
        const {id} = req.params
        res.send(await livroServices.deleteLivroInfo(parseInt(id)));
    },
    async createAvaliacao(req,res){
        const {id} = req.params
        const avaliacao = req.body
        console.log(avaliacao)
        if(!avaliacao.nome || !avaliacao.avaliacao || !avaliacao.nota){
            throw new Error("faltam dados")
        }
        res.send(await livroServices.createAvaliacao(avaliacao,parseInt(id)));
    }
}

export default controller;