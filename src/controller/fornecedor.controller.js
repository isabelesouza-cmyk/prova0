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

async function findAllFornecedorController(request, response) {
    try {
        const fornecedor = await fornecedorServices.findAllFornecedorServices();
        response.status(200).send({fornecedor});
    } catch(error) {
        response.status(404).send(error.message);
    }
}

async function findFornecedorByIdController(request, response) {

    const {id} = request.params;

    try {
        const fornecedor = await fornecedorServices.findFornecedorByIdServices(id);
        response.status(200).send({fornecedor});
    } catch(error) {
        response.status(404).send(error.message);
    }
}

async function updateFornecedorController(request, response) {
    
    const {id} = request.params;
    const novoFornecedor = request.body;

    try {
        const fornecedor = await fornecedorServices.updateFornecedorServices(id, novoFornecedor);
        response.status(201).send({fornecedor});
    } catch(error) {
        response.status(400).send(error.message);
    }

}


export default {
    createFornecedorController,
    findAllFornecedorController,
    findFornecedorByIdController,
    updateFornecedorController
}