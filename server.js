
//Chamadas dos pacotes:
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Produto = require('./app/models/produto');
var Coletor = require('./app/models/coletor');


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var uri = 'mongodb+srv://user:pla123@iot-api-waapt.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(uri, { useNewUrlParser: true, socketTimeoutMS: 300000 } );


//Configuração da variável app para usar o 'bodyParser()':
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo a porta onde será executada a nossa api:
var port = process.env.port || 8000;

//Rotas da nossa API:
//=============================================================================

//Criando uma instância das Rotas via Express:
var router = express.Router();

//Middleware para usar em todos os requests enviados para a nossa API- Mensagem Padrão:
router.use(function(req, res, next) {
    console.log('Listening...');
    next(); 
});

//Rota de Teste para sabermos se tudo está realmente funcionando (acessar através: GET: http://localhost:8000/api): 
router.get('/', function(req, res) {
    res.json({ message: 'Tudo 100%!' })
});

//API's:
//==============================================================================

//Rotas que terminarem com '/produtos' (servir: GET ALL & POST)
router.route('/produtos')

/* 1) Método: Criar Produto (acessar em: POST http://localhost:8000/api/produtos)  */
.post(function(req, res) {
    var produto = new Produto();
    console.log('Req', req);
    console.log('Res', res);
    //Aqui vamos setar os campos do produto (via request):
    produto.nome = req.body.nome;
    produto.preco = req.body.preco;
    produto.descricao = req.body.descricao;

    produto.save(function(error) {
        if(error)
            res.send('Erro ao tentar salvar o Produto....: ' + error);
        
        res.json({ message: 'Produto Cadastrado com Sucesso!' });
    });
})

/* 2) Método: Selecionar Todos Produtos (acessar em: GET http://localhost:8000/api/produtos)  */
.get(function(req, res) {
    Produto.find(function(error, produtos) {
        if(error) 
            res.send('Erro ao tentar Selecionar Todos os produtos...: ' + error);

        res.json(produtos);
    });
});

//Rotas que irão terminar em '/produtos/:produto_id' (servir tanto para: GET, PUT & DELETE: id):
router.route('/produtos/:produto_id')

/* 3) Método: Selecionar por Id: (acessar em: GET http://localhost:8000/api/produtos/:produto_id) */
.get(function (req, res) {
    
    //Função para poder Selecionar um determinado produto por ID - irá verificar se caso não encontrar um detemrinado
    //produto pelo id... retorna uma mensagem de error:
    Produto.findById(req.params.produto_id, function(error, produto) {
        if(error)
            res.send('Id do Produto não encontrado....: ' + error);

        res.json(produto);
    });
})

/* 4) Método: Atualizar por Id: (acessar em: PUT http://localhost:8000/api/produtos/:produto_id) */
.put(function(req, res) {

    //Primeiro: para atualizarmos, precisamos primeiro achar 'Id' do 'Produto':
    Produto.findById(req.params.produto_id, function(error, produto) {
        if (error) 
            res.send("Id do Produto não encontrado....: " + error);

            //Segundo: 
            produto.nome = req.body.nome;
            produto.preco = req.body.preco;
            produto.descricao = req.body.descricao;

            //Terceiro: Agora que já atualizamos os dados, vamos salvar as propriedades:
            produto.save(function(error) {
                if(error)
                    res.send('Erro ao atualizar o produto....: ' + error);

                res.json({ message: 'Produto atualizado com sucesso!' });
            });
        });
    })

    /* 5) Método: Excluir por Id (acessar: http://localhost:8000/api/produtos/:produto_id) */
.delete(function(req, res) {

Produto.remove({
    _id: req.params.produto_id
    }, function(error) {
        if (error) 
            res.send("Id do Produto não encontrado....: " + error);

        res.json({ message: 'Produto Excluído com Sucesso!' });
    });
});

router.route('/coletores')

/* 1) Método: Criar Produto (acessar em: POST http://localhost:8000/api/produtos)  */
.post(function(req, res) {
    var coletor = new Coletor();
    console.log(coletor.leitura);
    let dados = {
        produtoName: req.body.leitura[0].produtoName,
        id: req.body.leitura[0].id,
        preco: req.body.leitura[0].preco,
        quantidade: req.body.leitura[0].quantidade,
        unidade: req.body.leitura[0].unidade
    }
    

    //Aqui vamos setar os campos do produto (via request):
    coletor.leitura.push(dados);
    coletor.usuario = req.body.usuario;
    coletor.coletorNome = req.body.coletorNome;

    coletor.save(function(error) {
        if(error)
            res.send('Erro ao tentar cadastrar o Coletor....: ' + error);
        
        res.json({ message: 'Coletor Cadastrado com Sucesso!' });
    });
})

/* 2) Método: Selecionar Todos Produtos (acessar em: GET http://localhost:8000/api/produtos)  */
.get(function(req, res) {
    Coletor.find(function(error, coletores) {
        if(error) 
            res.send('Erro ao tentar Selecionar Todos os produtos...: ' + error);

        res.json(coletores);
    });
});

router.route('/coletores/:coletor_id')

/* 3) Método: Selecionar por Id: (acessar em: GET http://localhost:8000/api/produtos/:produto_id) */
.get(function (req, res) {
    
    //Função para poder Selecionar um determinado produto por ID - irá verificar se caso não encontrar um detemrinado
    //produto pelo id... retorna uma mensagem de error:
    Coletor.findById(req.params.produto_id, function(error, coletor) {
        if(error)
            res.send('Id do Produto não encontrado....: ' + error);

        res.json(coletor);
    });
})

/* 4) Método: Atualizar por Id: (acessar em: PUT http://localhost:8000/api/produtos/:produto_id) */
.put(function(req, res) {

    //Primeiro: para atualizarmos, precisamos primeiro achar 'Id' do 'Produto':
    Coletor.findById(req.params.coletor_id, function(error, coletor) {
        if (error) 
            res.send("Id do Coletor não encontrado....: " + error);
            //Segundo: 
            coletor.coletorNome = req.body.coletorNome;
            coletor.usuario = req.body.usuario;
            coletor.leitura.produtoName = req.body.leitura.produtoName; 
            coletor.leitura.id = req.body.leitura.id;
            coletor.leitura.preco = req.body.leitura.preco;
            coletor.leitura.quantidade = req.body.leitura.quantidade;
            coletor.leitura.unidade = req.body.leitura.unidade;

            //Terceiro: Agora que já atualizamos os dados, vamos salvar as propriedades:
            coletor.save(function(error) {
                if(error)
                    res.send('Erro ao atualizar o coletor....: ' + error);

                res.json({ message: 'Coletor atualizado com sucesso!' });
            });
        });
    })

    /* 5) Método: Excluir por Id (acessar: http://localhost:8000/api/produtos/:produto_id) */
.delete(function(req, res) {

Coletor.remove({
    _id: req.params.coletor_id
    }, function(error) {
        if (error) 
            res.send("Id do Coletor não encontrado....: " + error);

        res.json({ message: 'Produto Excluído com Sucesso!' });
    });
});

//Definindo um padrão das rotas prefixadas: '/api':
app.use('/api', router);

//Iniciando a Aplicação (servidor):
app.listen(port);
console.log("Iniciando a app na porta " + port);