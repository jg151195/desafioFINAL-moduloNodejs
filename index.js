import express from "express";

const app = express();
app.use(express.json());

app.use('/', router)

app.listen(2000, ()=> "Listening 2000");