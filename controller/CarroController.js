const express = require('express');

const router = express.Router();

const modelCategoria = require('../model/CarrosModel');

router.get('/testeget', (req, res)=>{
    console.log('----A REQUISIÇÃO GET PASSOU PELA CARRO CONTROLLER----');
    res.send('----TESTE DE ROTA GET DE CARROS----');
});

router.post('/testepost', (req, res)=>{
    let {nome_carro} = req.body;
    console.log(nome_carro);
    
    modelCategoria.create(
        {nome_carro}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                menssagemStatus: 'Carro inserido com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao cadastrar o veículo',
                erroBancoDados: erro
            });
        }
    );
});

router.put('/testeput', (req, res)=>{
    console.log('A REQUISIÇÃO PUT PASSOU PELA CARRO CONTROLLER');
    res.send('TESTE DE ROTA PUT DE CARRO');
});

router.delete('/testedelete', (req, res)=>{
    console.log('A REQUISIÇÃO DELETE PASSOU PELA CARRO CONTROLLER');
    res.send('TESTE DE ROTA DELETE DE CARRO');
});

module.exports = router;