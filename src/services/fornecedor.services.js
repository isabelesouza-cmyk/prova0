import fornecedorRepository from "../repositories/fornecedor.repository.js";

async function createFornecedorServices(novoFornecedor) {
    const fornecedor = await produtoRepository.createFornecedorRepository(novoFornecedor);
    return fornecedor;
}

export default {
    createFornecedorServices
}