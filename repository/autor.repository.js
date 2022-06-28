import { connect } from "./postgresdb.js"

const repository = {
    async  createAutor (autor){
        const conn = await connect();
        try{
            const sql = "INSERT INTO autores (nome, email, telefone) VALUES ($1,$2,$3) RETURNING *";
            const values = [autor.nome,autor.email,autor.telefone];
            const res = await conn.query(sql,values);
            return res.rows[0];
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release();
        }
    },
    
    async updateAutor (autor){
        const conn = await connect();
        try{
            const sql = "UPDATE autores SET nome = $1, email = $2, senha = $3, telefone = $4, endereco = $4 WHERE autor_id = $5"
            const values = [autor.nome, autor.email, autor.telefone]
            const res = await conn.query(sql,values);
            return res.rows[0];
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release();
        }
    },
    
    async  deleteAutor (autorId){
        const conn = await connect();
        try{
            const sql = "DELETE FROM autores WHERE autor_id = $1"
            const values = [autorId.id];
            await conn.query(sql,values);
            return "Deleted."
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release();
        }
    },
    
    async  getAllAutores (){
        const conn = await connect();
        try{
            const sql = "SELECT * FROM autores";
            const res = await conn.query(sql);
            return res.rows;
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release()
        }
    },
    
    async  getAutor (autorId){
        const conn = await connect();
        try{
            const sql = "SELECT * FROM autores WHERE autor_id = $1";
            const values = [autorId.id];
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