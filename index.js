import express from "express";
import cors from 'cors'
import clienteRouter from "./routers/cliente.router.js"
import autorRouter from "./routers/autor.router.js";
import livroRouter from "./routers/livro.router.js"
import vendaRouter from "./routers/venda.router.js"

const app = express();
app.use(express.json());

app.use(cors());

app.use('/cliente', clienteRouter)
app.use('/venda', vendaRouter)
app.use('/autor', autorRouter)
app.use('/livro', livroRouter)

app.listen(2000, ()=> {
    console.log("Listening 2000")
});