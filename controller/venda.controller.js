import repository from '../repository/venda.repository.js';
import vendaServices from '../services/venda.services.js'

const controller = {

    async createVenda(req, res) {
        try {
            const venda = req.body
            if (!venda.valor || !venda.cliente_id || !venda.livro_id || !venda.data) {
                res.send("Valor, cliente_id, livro_id e data são obrigatórios");
            }
            res.send(await vendaServices.createVenda(venda));
        } catch(err){
            throw err
        }
    },

    async updateVenda(req, res) {
        const venda = req.body
        if (!venda.valor || !venda.cliente_id || !venda.livro_id ||venda.data) {
            throw new Error("Nome, email, senha, telefone, endereco são obrigatorios");
        }
        res.send(await vendaServices.updateVenda(venda));
    },

    async deleteVenda(req, res) {
        
        if(!req.params){
            throw new Error("Id do venda necessário");
        }
        res.send(await vendaServices.deleteVenda(req.params));
    },

    async getAllVendas(req, res) {
        res.send(await vendaServices.getAllVendas());
    },

    async getVenda(req, res) {
        if(!req.params){
            throw new Error("Id do venda necessário");
        }
        res.send(await vendaServices.getVenda(req.params));
    }
}
export default controller