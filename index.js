
const express = require('express');

const carroController = require('./controller/CarroController')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

console.log('A REQUISIÇÃO PASSOU PELO INDEX');
app.use('/', carroController);


app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});