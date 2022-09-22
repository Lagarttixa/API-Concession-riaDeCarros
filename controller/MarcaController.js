const express = require('express');

const router = express.Router();

const MarcaModel = require('../model/MarcaModel');

router.get('/listarMarca', (req, res)=>{
    MarcaModel.findAll()
        .then(
            (marca)=>{
                return res.status(200).json(marca);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar marca',
                    erroBancoDados: erro
                });
            }
        );
});

router.get('/listarMarca/:id',(req, res)=>{

    let {id} = req.params;

    MarcaModel.findByPk(id)
        .then(
            (marca)=>{
                res.status(200).json(marca);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar marca',
                    erroBancoDados: erro
                });
            }
        );

});

router.post('/inserirMarca', (req, res)=>{
    let {marca} = req.body;
    
    MarcaModel.create(
        {marca}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                menssagemStatus: 'Marca inserida com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao cadastrar marca',
                erroBancoDados: erro
            });
        }
    );
});

router.put('/atualizarMarca', (req, res)=>{
    let {id, marca} = req.body;

    MarcaModel.update(
        {marca},
        {where:{id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Marca alterado com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao alterar marca',
                        erroBancoDados: erro
                    });
        }
    );
});

router.delete('/deletarMarca', (req, res)=>{
    
    let {id} = req.params;

    CarrosModel.destroy(
        {where: {id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Marca excluido com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao excluir marca',
                        erroBancoDados: erro
                    });
        }
    );
});

module.exports = router;