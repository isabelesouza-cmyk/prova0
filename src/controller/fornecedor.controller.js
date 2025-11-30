import fornecedorServices from "../services/fornecedor.services.js";

async function createFornecedorController(request, response) {
    const novoFornecedor = request.body;

    try {
        const fornecedor = await fornecedorServices.createFornecedorServices(novoFornecedor);
        response.status(201).send({fornecedor});
    } catch(error) {
        response.status(400).send(error.message);
    }
}

export default {
    createFornecedorController
}