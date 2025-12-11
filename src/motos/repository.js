import db from '../config/database.js'

function getAllMotos() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM cadastro_motos', (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

function createMoto({ modelo, marca, ano, cor, placa, km_atual }) { //vai receber um objeto que contém essas informações da moto, como parametro
    return new Promise((resolve, reject) => {
        //comando para inserir no banco. Os '?' são os campos vázios, esperando os valores
        const sql = `
        INSERT INTO cadastro_motos (modelo, marca, ano, cor, placa, km_atual)
        VALUES (?, ?, ?, ?, ?, ?) 
        `;

        //aqui os dados são realmente enviados
        db.query(sql, [modelo, marca, ano, cor, placa, km_atual], (err, results) => {
            //faz uma validação. Se 'err' existe, então algo deu errado. Se err NÃO existe, deu tudo certo.
            if (err) return reject(err); //se existe, envia um aviso de erro para o controller
            resolve(results); //se não, envia para o controller o resultado
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