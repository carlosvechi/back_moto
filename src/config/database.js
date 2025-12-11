import mysql from'mysql2'

//cria a conexão com os dados do referentes ao nosso banco
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'emerson_cilindros',
    port: '3307'
});

//inicia a conexão
connection.connect((err) => {
    if (err) { //se err existe, gera um erro ao conectar
        console.error('Erro ao conectar ao MySQL: ', err);
        return;
    }
    //se não, da sucesso.
    console.log('Conectado ao MySQL com sucesso!');
});

//exporta a conexão.
export default connection;