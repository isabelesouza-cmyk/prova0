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
async function updateFornecedorServices(id, novoFornecedor) {
    const fornecedor = await fornecedorRepository.findFornecedorByIdRepository(id);

    if (!fornecedor) {
        throw new Error("Fornecedor não encontrado!");
    }

    const fornecedorAtualizado = await fornecedorRepository.updateFornecedorRepository(id, novoFornecedor);

    if (!fornecedorAtualizado) {
        throw new Error("Erro ao atualizar o fornecedor!");
    }
    
    return fornecedorAtualizado;
}

async function deleteFornecedorServices(id) {
    const fornecedor = await fornecedorRepository.findFornecedorByIdRepository(id);

    if (!fornecedor) {
        throw new Error("Fornecedor não encontrado!");
    }

    const mensagemRetorno =  await fornecedorRepository.deleteFornecedorRepository(id);

    if (!mensagemRetorno) {
        throw new Error("Erro ao deletar fornecedor!");
    }

    return mensagemRetorno;
}

export default {
    createFornecedorServices,
    findAllFornecedorServices,
    findFornecedorByIdServices,
    updateFornecedorServices,
    deleteFornecedorServices
}