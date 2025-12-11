//importa o app do 'app.js'
import app from "./app.js";

//define a rota
const PORT = 3000;

//inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
