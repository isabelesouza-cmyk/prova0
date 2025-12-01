import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS fornecedor (
        id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
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

function findAllFornecedorRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM fornecedor`,
            [],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

function findFornecedorByIdRepository(id) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT 
                * 
            FROM fornecedor
            WHERE id = ?`,
            [id],
            (error, row) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(row);
                }
            }
        );
    });
}

export default {
    createFornecedorRepository,
    findAllFornecedorRepository,
    findFornecedorByIdRepository
}
