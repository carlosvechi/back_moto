# ⚙️ Backend – Sistema de Gestão de Motos (Emerson Cilindros)

## 📌 Sobre o Backend

Este módulo corresponde ao **backend** do sistema de gestão de motos da concessionária fictícia **Emerson Cilindros**. Ele é responsável por disponibilizar uma **API REST** para o gerenciamento das motos, realizando operações de cadastro, edição, exclusão e listagem, com persistência em banco de dados MySQL.

---

## 🎯 Responsabilidades do Backend

* Exposição de API REST
* Regras de negócio relacionadas às motos
* Comunicação com banco de dados MySQL
* Integração com o frontend via HTTP

---

## 🛠️ Tecnologias utilizadas

* Node.js
* Express
* MySQL
* JavaScript

---

## 📂 Estrutura do projeto

```
backend/
 └── src/
     ├── config/
     │   └── database.js
     ├── motos/
     │   ├── controller.js
     │   ├── repository.js
     │   └── router.js
     ├── app.js
     └── server.js
```

---

## 🔌 Rotas da API

```http
GET    /motos        → Listar todas as motos
POST   /motos        → Cadastrar nova moto
PUT    /motos/:id    → Atualizar moto existente
DELETE /motos/:id    → Deletar moto
```

---

## ▶️ Como executar o backend

### Pré-requisitos

* Node.js **v24.12.0** ou superior
* MySQL instalado e configurado

### Instalação e execução

```bash
npm install
node src/server.js
```

O servidor será iniciado e ficará responsável por atender as requisições da API REST.

---

## 🗄️ Banco de dados

A aplicação utiliza um banco de dados MySQL. As configurações de conexão estão centralizadas no arquivo:

```
src/config/database.js
```

Recomenda-se o uso de variáveis de ambiente para armazenar credenciais sensíveis.

---

## 📌 Status do módulo

✅ Finalizado (Projeto acadêmico)

---

## 👤 Autor

**Carlos**
Projeto acadêmico individual – UniSENAI

---

> ⚠️ Este backend foi desenvolvido exclusivamente para fins educacionais.
