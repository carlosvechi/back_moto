import mysql from'mysql2'


const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'emerson_cilindros',
    port: '3307'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL: ', err);
        return;
    }
    console.log('Conectado ao MySQL com sucesso!');
});

export default connection;