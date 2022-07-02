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
    }
}
export default controller