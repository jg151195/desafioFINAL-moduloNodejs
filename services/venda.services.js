import vendaRepository from '../repository/venda.repository.js'

const services = {
    async  createVenda (venda){
        return await vendaRepository.createVenda(venda);
    },
    
    async  updateVenda (venda){
        return await vendaRepository.updateVenda(venda);
    },
    
    async  deleteVenda (vendaId){
        return await vendaRepository.deleteVenda(vendaId);
    },
    
    async  getAllVendas (){
        return await vendaRepository.getAllVendas();
    },
    
    async  getVenda (vendaId){
        return await vendaRepository.getVenda(vendaId);
    }
}
export default services