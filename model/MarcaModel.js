const Sequelize = require('sequelize');

const connection = require('../database/database');

const Marcas = connection.define(
    'marcas',
    {
        id_marca:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            "timestamps": false
        },

        nome_marca:{
            type: Sequelize.STRING(45),
            allowNull: false,
            "timestamps": false
        },
    });

module.exports = Marcas;