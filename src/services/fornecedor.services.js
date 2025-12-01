import fornecedorRepository from "../repositories/fornecedor.repository.js";

async function createFornecedorServices(novoFornecedor) {
    const fornecedor = await fornecedorRepository.createFornecedorRepository(novoFornecedor);
    return fornecedor;
}

export default {
    createFornecedorServices
}