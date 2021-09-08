const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    nome_aluno: {
        type: String,
        required: true,
    },
    data_aniversario: {
        type: Date,
        required: true,
    },
    turma: {
        type: Number,
        required: true,
    },
    check_restricao: {
        type: Boolean,
        required: true,
    },
    obs_restricao: {
        type: String,
    },
    check_imagem: {
        type: Boolean,
        required: true,
    },
    nome_responsavel: {
        type: String,
        required: true,
    },
    tel_responsavel: {
        type: String,
        required: true,
    },
    autorizado_retirar: {
        type: String,
        required: true,
    },
    parentesco_autorizado_retirar: {
        type: String,
        required: true,
    },
    obs_adicionais: {
        type: String,
    },
    criado_em: {
        type: Date,
        default: Date.now(),
        required: true,
    }
})

mongoose.model('students', Student)

