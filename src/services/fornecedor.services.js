import fornecedorRepository from "../repositories/fornecedor.repository.js";

async function createFornecedorServices(novoFornecedor) {
    const fornecedor = await fornecedorRepository.createFornecedorRepository(novoFornecedor);

    if (!fornecedor) {
        throw new Error("Erro ao salvar criar novo fornecedor.");
    }

    return fornecedor;
}


async function findAllFornecedorServices() {
    const fornecedor = await fornecedorRepository.findAllFornecedorRepository();
    return fornecedor;
}

async function findFornecedorByIdServices(id) {
    const fornecedor = await fornecedorRepository.findFornecedorByIdRepository(id);

    if (!fornecedor) {
        throw new Error("Fornecedor não encontrado");
    }

    return fornecedor;
}


export default {
    createFornecedorServices,
    findAllFornecedorServices,
    findFornecedorByIdServices
}