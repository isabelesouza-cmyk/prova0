import express from "express";
import fornecedorRoutes from "./src/routes/fornecedor.routes.js";

const app = express();

app.use(express.json());
app.use(fornecedorRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
});