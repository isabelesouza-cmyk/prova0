import express from "express";
import fornecedorRouters from "./src/routes/fornecedor.routers.js";

const app = express();

app.use(express.json());
app.use(fornecedorRouters);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
});