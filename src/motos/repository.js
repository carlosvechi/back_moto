import db from '../config/database.js'

function getAllMotos() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM cadastro_motos', (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

function createMoto({ modelo, marca, ano, cor, placa, km_atual }) {
    return new Promise((resolve, reject) => {
        const sql = `
        INSERT INTO cadastro_motos (modelo, marca, ano, cor, placa, km_atual)
        VALUES (?, ?, ?, ?, ?, ?)
        `;

        db.query(sql, [modelo, marca, ano, cor, placa, km_atual], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

function updateMoto(id, data) {
    const {modelo, marca, ano, cor, placa, km_atual} = data;

    return new Promise((resolve, reject) => {
        const sql = `
            UPDATE cadastro_motos
            SET modelo=?, marca=?, ano=?, cor=?, placa=?, km_atual=?
            WHERE id=?
        `;

        db.query(sql, [modelo, marca, ano, cor, placa, km_atual, id], (err, res) => {
           if (err) return reject(err);
           resolve(res); 
        });
    });
}

function deleteMoto(id) {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM cadastro_motos WHERE id=?', [id], (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
}

    export {
        getAllMotos,
        createMoto,
        updateMoto,
        deleteMoto
    };