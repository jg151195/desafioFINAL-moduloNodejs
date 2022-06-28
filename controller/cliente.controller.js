import clienteServices from '../services/cliente.services.js'

const controller = {

    async createCliente(req, res) {
        try {
            const cliente = req.body
            if (!cliente.nome || !cliente.email || !cliente.senha || !cliente.telefone || !cliente.endereco) {
                res.send("Nome, email, senha, telefone, endereco são obrigatorios");
            }
            res.send(await clienteServices.createCliente(cliente));
        } catch(err){
            throw err
        }
    },

    async updateCliente(req, res) {
        const cliente = req.body
        if (!cliente.nome || !cliente.email || !cliente.senha || !cliente.telefone || !cliente.endereco) {
            throw new Error("Nome, email, senha, telefone, endereco são obrigatorios");
        }
        res.send(await clienteServices.updateCliente(cliente));
    },

    async deleteCliente(req, res) {
        
        if(!req.params){
            throw new Error("Id do cliente necessário");
        }
        res.send(await clienteServices.deleteCliente(req.params));
    },

    async getAllClientes(req, res) {
        res.send(await clienteServices.getAllClientes());
    },

    async getCliente(req, res) {
        if(!req.params){
            throw new Error("Id do cliente necessário");
        }
        res.send(await clienteServices.getCliente(req.params));
    },

    // async createAutor(req, res) {
    //     return
    // },

    // async updateAutor(req, res) {
    //     return
    // },

    // async deleteAutor(req, res) {
    //     return
    // },

    // async getAllAutor(req, res) {
    //     return
    // },

    // async getAutor(req, res) {
    //     return
    // },



    // async createLivro(req, res) {
    //     return
    // },

    // async updateLivro(req, res) {
    //     return
    // },

    // async deleteLivro(req, res) {
    //     return
    // },

    // async getLivro(req, res) {
    //     return
    // },

    // async getAllLivro(req, res) {
    //     return
    // },


    // async getLivroFromAutor(req, res) {
    //     return

    // },

    // async createLivroInfo(req, res) {
    //     return
    // },

    // async deleteLivroInfo(req, res) {
    //     return
    // },

    // async createAvaliacao(req, res) {
    //     return
    // },

    // async deleteAvaliacao(req, res) {
    //     return
    // },


    // async createVenda(req, res) {
    //     return
    // },

    // async getVenda(req, res) {
    //     return
    // },

    // async getAllVenda(req, res) {
    //     return
    // },


    // async getVendaFromCliente(req, res) {
    //     return
    // },

    // async getVendaFromLivro(req, res) {
    //     return
    // },

    // async getVendaFromAutor(req, res) {
    //     return
    // }

}
export default controller