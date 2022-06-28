import express from "express";

import autorController from "../controller/autor.controller.js";

const router = express.Router();

router.post("/createAutor", autorController.createAutor)
router.put("/updateAutor", autorController.updateAutor)
router.delete("/deleteAutor/:id", autorController.deleteAutor)
router.get("/getAllAutores", autorController.getAllAutores)
router.get("/getAutor/:id", autorController.getAutor)

export default router