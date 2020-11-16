const mongoose = require("mongoose")

const cursosSchema = new mongoose.Schema({
    id : { type : Number},
    descricao: { type : String },
    dataInclusao: { type : String },
    ativo: { type : Boolean },
    horario: { type : String },
    bootcamp: { type : Boolean },
    quantidadeAlunos: { type : Number},
    gratis: { type : Boolean},
    cidade: { type : String},
    estado: { type : String},
},{
    versionKey: false
})

const cursos = new mongoose.model("cursos", cursosSchema)

module.exports = cursos