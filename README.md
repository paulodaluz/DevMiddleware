# Descrição do Projeto
Este projeto foi desenvolvido com o intuito de atender aos requisitos de um trabalho da faculdade, condizente a matéria de Internet of Things.

## Objetivo do Projeto
1) Cada dupla deverá desenvolver um Middleware (PaaS) básico para ambientes IoT – Independente da linguagem de programação. O Middleware deverá ter as seguintes funcionalidades: 
  - Receber conexões de dispositivos (Perfil - JSON, XML) [Ex.: ler de um arquivo, receber via rede]. 
  - O Middleware deverá armazenar informações dos dispositivos e aplicações conectadas a ele (Perfil) .
  - Oferecer as infos dos dispositivos como um "cardápio".
  - Possibilitar que as aplicações recebam dados dos dispositivos (Consulta e Assinatura).
  - Plus: caminho inverso, atuar nos dispositivos (Ex.: modificar dados de perfil).

## Tecnologias Utilizadas
As técnologias utilizadas foram NodeJS, NPM e MongoDB.

## Bibliotecas utilizadas
	* body-parser versão 1.19.0,
	* express versão 4.17.1,
	* express-validator versão 6.2.0,
	* mongoose versão 5.6.11,
	* request versão 2.88.0,
	* nodemon versão 1.19.1

# Como Instalar
Utilizando o terminal navegue até a pasta que deseja salvar o projeto;
Clone o repositório com o comando ```git clone https://github.com/paulodaluz/DevMiddleware```;
Após o projeto ser clonado com sucesso utilize o comando ```npm install``` para instalar as dependências;
Para iniciar o projeto utilize o comando ```npm start```.

# Como Utilizar
Para realizar consultas você deverá utilizar a aplicação "Postman" https://www.getpostman.com/downloads/. Antes de fazer os testes a seguir você deverá executar o seguinte processo:

Entrar na pasta do projeto no terminal;
Rodar a aplicação com o comando ```npm start```.

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

## Desenvolvedor
[Paulo Ricardo da Luz Júnior](https://www.linkedin.com/in/paulo-ricardo-da-luz-j%C3%BAnior-5a3953164/)

[Pablo Germano Maronezi Zilli](https://www.linkedin.com/in/pablo-maronezi/)
