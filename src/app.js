const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()


//String de conexão
mongoose.connect("mongodb://localhost:27017/cursos", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

//Conexão com o mongo
let db = mongoose.connection;

// Erro ou sucesso na conexão
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("conexão foi feita com sucesso.")
})

//rotas
const cursos = require("./routes/cursosRoute")

//configurar body parser
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })

app.use("/cursos", cursos)

module.exports = app
