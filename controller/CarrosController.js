const express = require('express');

const router = express.Router();

router.get('/testeget', (req, res)=>{
    
    console.log('A REQUISIÇÃO GET PASSOU PELA CATEGORIA CONTROLLER');
    res.send('TESTE DE ROTA GET DE CARROS');
});

router.post('/testepost', (req, res)=>{
    console.log('A REQUISIÇÃO POST PASSOU PELA CATEGORIA CONTROLLER');
    res.send('TESTE DE ROTA POST DE CARROS');
});

router.put('/testeput', (req, res)=>{
    console.log('A REQUISIÇÃO PUT PASSOU PELA CATEGORIA CONTROLLER');
    res.send('TESTE DE ROTA PUT DE CARROS');
});

router.delete('/testedelete', (req, res)=>{
    console.log('A REQUISIÇÃO DELETE PASSOU PELA CATEGORIA CONTROLLER');
    res.send('TESTE DE ROTA DELETE DE CARROS');
});

module.exports = router;