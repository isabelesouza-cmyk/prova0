import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS fornecedor (
        id INTEGER PRIMARY KEY UNIQUE NOT NULL AUTOINCREMENT,
        cnpj TEXT NOT NULL UNIQUE,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
    )
`);

function createFornecedorRepository(novoFornecedor) {
    return new Promise((resolve, reject) => {

        const {
            cnpj,      
            nome,
            email       
        } = novoFornecedor;

        db.run(
            `INSERT INTO fornecedor(cnpj, nome, email)
            VALUES(?,?,?)`,
            [cnpj,nome,email],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        id: this.lastID,
                        novoFornecedor
                    });
                }
            }
        );

    });

}

export default {
    createFornecedorRepository
}
