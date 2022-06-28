import autorServices from '../services/autor.services.js'

const controller = {

    async createAutor(req, res) {
        try {
            const autor = req.body
            if (!autor.nome || !autor.email  || !autor.telefone) {
                throw new Error("Nome, email, endereco são obrigatorios");
            }
            res.send(await autorServices.createAutor(autor));
        } catch(err){
            throw new Error(err);
        }
    },

    async updateAutor(req, res) {
        const autor = req.body
        if (!autor.nome || !autor.email || !autor.telefone) {
            throw new Error("Nome, email, telefone são obrigatorios");
        }
        res.send(await autorServices.updateAutor(autor));
    },

    async deleteAutor(req, res) {
        
        if(!req.params){
            throw new Error("Id do autor necessário");
        }
        res.send(await autorServices.deleteAutor(req.params));
    },

    async getAllAutores(req, res) {
        res.send(await autorServices.getAllAutors());
    },

    async getAutor(req, res) {
        if(!req.params){
            throw new Error("Id do autor necessário");
        }
        res.send(await autorServices.getAutor(req.params));
    }
}

export default controller