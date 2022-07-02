import {
    getClient
} from "./mongodb.js";

const repository = {
    async createLivroInfo(livroInfo) {
        const client = getClient();
        try {
            await client.connect()
            await client.db('livraria').collection('livroInfo').insertOne(livroInfo);
        } catch (err) {
            throw err;
        } finally{
            await client.close()
        }
    },
    async getLivroInfo(id){
        const client = getClient();
        try {
            await client.connect()
            const livroInfo = await client.db('livraria').collection('livroInfo').findOne({livro_id:id});
            return livroInfo
        } catch (err) {
            throw err;
        } finally{
            await client.close()
        }
    },
    async updateLivroInfo(livroInfo) {
        const client = getClient();
        try {
            await client.connect()
            await client.db('livraria').collection('livroInfo').updateOne(
                {livro_id: livroInfo.livro_id},
                {$set: {...livroInfo}}
                );
        } catch (err) {
            throw err;
        } finally{
            await client.close()
        }
    },

    async deleteLivroInfo(id) {
        const client = getClient();
        try {
            await client.connect()
            await client.db('livraria').collection('livroInfo').deleteOne({livro_id:id});
        } catch (err) {
            throw err;
        } finally{
            await client.close()
        }
    },
    async createAvaliacao(avaliacao, id){
        const client = getClient();
        try {
            await client.connect()
            const info = await client.db('livraria').collection('livroInfo').findOne({livro_id:id});
            info.avaliacoes.push(avaliacao);
            await this.updateLivroInfo(info);
        } catch (err) {
            throw err;
        } finally{
            await client.close()
        }
    }
}
export default repository;