const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const passport = require('passport')
require('../models/StudentModel')
const Student = mongoose.model('students')

router.get('/', (req, res) => {
    Student.find().lean().sort({name: 'asc'})
        .then(students => {
            res.json(students)
        })
        .catch(err => {
            `error: ${err.message}`
        })
})

router.post('/new', (req, res) => {
    const newStudent = {
        nome_aluno: req.body.nome_aluno,
        data_aniversario: req.body.data_aniversario,
        turma: req.body.turma,
        check_restricao: req.body.check_restricao,
        obs_restricao: req.body.obs_restricao,
        check_imagem: req.body.check_imagem,
        nome_responsavel: req.body.nome_responsavel,
        tel_responsavel: req.body.telefone_responsavel,
        autorizado_retirar: req.body.autorizado_retirar,
        parentesco_autorizado_retirar: req.body.parentesco_autorizado_retirar,
        obs_adicionais: req.body.obs_adicionais,
    }

    new Student(newStudent)
        .save()
        .then(result => {
            res.status(200).send('Sucesso!')
        })
        .catch(err => {
            res.status(400).send('Erro ao adicionar')
        })
})

module.exports = router
