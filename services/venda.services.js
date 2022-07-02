import vendaRepository from '../repository/venda.repository.js'
import livroServices from '../services/livro.services.js'

const services = {
    async createVenda(venda) {
        const livro = await livroServices.getLivro(venda.livro_id);
        if (livro[0].estoque > 0) {
            livro[0].estoque--;
            await livroServices.updateLivro(livro[0]);
        }
        return await vendaRepository.createVenda(venda);
    },

    async updateVenda(venda) {
        return await vendaRepository.updateVenda(venda);
    },

    async deleteVenda(vendaId) {
        const venda = await this.getVenda(vendaId);
        if (venda.length == 0) {
            return "Venda não encontrada !"
        }
        const livro = await livroServices.getLivro(venda[0].livro_id);
        livro[0].estoque++;
        await livroServices.updateLivro(livro[0]);
        return await vendaRepository.deleteVenda(vendaId);
    },

    async getAllVendas() {
        return await vendaRepository.getAllVendas();
    },

    async getVenda(vendaId) {
        return await vendaRepository.getVenda(vendaId);
    }
}
export default services