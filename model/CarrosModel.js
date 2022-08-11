
const Sequelize = require('sequelize');

const connection = require('../database/database');

const Carro = connection.define(
    'carro',
    {
        nome_carro:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }
);

module.exports = Carro;