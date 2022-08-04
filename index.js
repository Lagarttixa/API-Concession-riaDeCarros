
const express = require('express');

const carrosController = require('./controller/CarrosController')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

console.log('A REQUISIÇÃO PASSOU PELO INDEX');
app.use('/', carrosController);


app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});