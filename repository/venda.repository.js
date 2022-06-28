import { connect } from "./postgresdb.js"

const repository = {
    async  createVenda (venda){
        const conn = await connect();
        try{
            const sql = "INSERT INTO vendas (valor, data, cliente_id, livro_id) VALUES ($1,$2,$3,$4) RETURNING *";
            const values = [venda.valor,venda.data,venda.cliente_id,venda.livro_id];
            const res = await conn.query(sql,values);
            return res.rows[0];
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release();
        }
    },
    
    async updateVenda (venda){
        const conn = await connect();
        try{
            const sql = "UPDATE vendas SET valor = $1, data = $2, cliente_id = $3, livro_id = $4 WHERE venda_id = $5"
            const values = [venda.valor, venda.data, venda.cliente_id, venda.livro_id, venda.venda_id]
            const res = await conn.query(sql,values);
            return res.rows[0];
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release();
        }
    },
    
    async  deleteVenda (vendaId){
        const conn = await connect();
        try{
            const sql = "DELETE FROM vendas WHERE venda_id = $1"
            const values = [vendaId.id];
            await conn.query(sql,values);
            return "Deleted."
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release();
        }
    },
    
    async  getAllVendas (){
        const conn = await connect();
        try{
            const sql = "SELECT * FROM vendas";
            const res = await conn.query(sql);
            return res.rows;
        } catch(err){
            throw new Error(err);
        } finally{
            conn.release()
        }
    },
    
    async  getVenda (vendaId){
        const conn = await connect();
        try{
            const sql = "SELECT * FROM vendas WHERE venda_id = $1";
            const values = [vendaId.id];
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