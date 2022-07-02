import { connect } from "./postgresdb.js"

const repository = {
    async  createCliente (cliente){
        const conn = await connect();
        try{
            const sql = "INSERT INTO clientes (nome, email, senha, telefone, endereco) VALUES ($1,$2,$3,$4,$5) RETURNING *";
            const values = [cliente.nome,cliente.email,cliente.senha,cliente.telefone,cliente.endereco];
            const res = await conn.query(sql,values);
            return res.rows[0];
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release();
        }
    },
    
    async updateCliente (cliente){
        const conn = await connect();
        try{
            const sql = "UPDATE clientes SET nome = $1, email = $2, senha = $3, telefone = $4, endereco = $5 WHERE cliente_id = $6 RETURNING *" 
            const values = [cliente.nome, cliente.email, cliente.senha, cliente.telefone, cliente.endereco, cliente.cliente_id]
            const res = await conn.query(sql,values);
            return res.rows[0];
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release();
        }
    },
    
    async  deleteCliente (clienteId){
        const conn = await connect();
        try{
            const sql = "DELETE FROM clientes WHERE cliente_id = $1"
            const values = [clienteId.id];
            await conn.query(sql,values);
            return "Deleted."
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release();
        }
    },
    
    async  getAllClientes (){
        const conn = await connect();
        try{
            const sql = "SELECT cliente_id,nome, email,telefone, endereco FROM clientes";
            const res = await conn.query(sql);
            return res.rows;
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release()
        }
    },
    
    async  getCliente (clienteId){
        const conn = await connect();
        try{
            const sql = "SELECT cliente_id,nome, email,telefone, endereco FROM clientes WHERE cliente_id = $1";
            const values = [clienteId.id];
            const res = await conn.query(sql,values);
            return res.rows;
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release()
        }
    }
        
} 

export default repository