
const express = require('express');

const marcaController = require('./controller/MarcaController')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

console.log('A REQUISIÇÃO PASSOU PELO INDEX');
app.use('/', marcaController);


app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});