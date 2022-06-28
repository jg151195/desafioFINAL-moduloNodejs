import { connect } from "./postgresdb.js"

const repository = {
    async  createLivro (livro){
        const conn = await connect();
        try{
            const sql = "INSERT INTO livros (nome, valor, estoque, autor_id) VALUES ($1,$2,$3,$4) RETURNING *";
            const values = [livro.nome,livro.valor,livro.estoque,livro.autor_id];
            const res = await conn.query(sql,values);
            return res.rows[0];
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release();
        }
    },
    
    async updateLivro (livro){
        const conn = await connect();
        try{
            const sql = "UPDATE livros SET nome = $1, valor = $2, estoque = $3, autor_id = $4 WHERE livro_id = $5"
            const values = [livro.nome, livro.valor, livro.estoque, livro.autor_id]
            const res = await conn.query(sql,values);
            return res.rows[0];
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release();
        }
    },
    
    async  deleteLivro (livroId){
        const conn = await connect();
        try{
            const sql = "DELETE FROM livros WHERE livro_id = $1"
            const values = [livroId.id];
            await conn.query(sql,values);
            return "Deleted."
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release();
        }
    },
    
    async  getAllLivros (){
        const conn = await connect();
        try{
            const sql = "SELECT * FROM livros";
            const res = await conn.query(sql);
            return res.rows;
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release()
        }
    },
    
    async  getLivro (livroId){
        const conn = await connect();
        try{
            const sql = "SELECT * FROM livros WHERE livro_id = $1";
            const values = [livroId.id];
            const res = await conn.query(sql,values);
            return res.rows;
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release()
        }
    }
}

export default repository;