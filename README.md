# DevMiddleware
Atividade - Entregável  • Cada dupla deverá desenvolver um Middleware (PaaS) básico para ambientes IoT – Independente da linguagem de programação • O Middleware deverá ter as seguintes funcionalidades: • Receber conexões de dispositivos (Perfil - JSON, XML) [Ex.: ler de um arquivo, receber via rede] • O Middleware deverá armazenar informações dos dispositivos e aplicações conectadas a ele (Perfil) • Oferecer as infos dos dispositivos como um “cardápio” • Possibilitar que as aplicações recebam dados dos dispositivos (Consulta e Assinatura) • Plus: caminho inverso, atuar nos dispositivos (Ex.: modificar dados de perfil)

# Como Instalar:
Utilizando o terminal navegue até a pasta que deseja salvar o projeto;
Clone o repositório com o comando "git clone <url>";
Após o projeto ser clonado com sucesso utilize o comando "npm install" para instalar as dependências;
Para iniciar o projeto utilize o comando "npm start".

# Como Utilizar
Para realizar consultas você deverá utilizar a aplicação "Postman" https://www.getpostman.com/downloads/. Antes de fazer os testes a seguir você deverá executar o seguinte processo:

Entrar na pasta do projeto no terminal;
Rodar a aplicação com o comando "npm start".

# Rotas de acesso a API:

### Cadastrar Coletor
POST http://localhost:3333/api/coletores/cadastrarColetor
Header: idDispositivo: Number
{
"coletorNome": String,
  "usuario": String,
  "leitura": [
    {
      "produtoName": String,
      "id": Number,
      "preco": String,
      "quantidade": Number,
      "unidade": String
    }
  ]
}

### Selecionar Todos os Coletores
GET http://localhost:3333/api/coletores/listarColetores

### Selecionar coletor por Id
GET http://localhost:3333/api/coletores/buscarColetor/:coletor_id

### Excluir coletor por Id
Delete http://localhost:3333/api/coletores/deletarColetor/:coletor_id

### Atualizar coletor por Id
PUT http://localhost:3333/api/coletores/alterarColetor/:coletor_id
Header: idDispositivo: Number

==========================================================================================


### Cadastrar Produto
POST http://localhost:3333/api/produtos/cadastrarProduto
Header: idDispositivo: Number
{
 "nome": String,
  "preco": Number,
  "descricao": String
}
### Selecionar Todos os Produtos
GET http://localhost:3333/api/produtos/listarProdutos

### Selecionar produto por Id
GET http://localhost:3333/api/produtos/buscarProduto/:produto_id

### Excluir produto por Id
Delete http://localhost:3333/api/produtos/deletarProduto/:produto_id

### Atualizar produto por Id
PUT http://localhost:3333/api/produtos/alterarProduto/:produto_id
Header: idDispositivo: Number


