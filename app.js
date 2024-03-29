var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index')

const db = require('./config/database')


// const dbUser = process.env.DB_USER
// const dbPass = process.env.DB_PASS
// const dbName = 'planejamentoOnline'
// console.log(dbUser, dbPass, dbName)
// db(`mongodb://localhost/${dbName}?retryWrites=true&w=majority`)
db(process.env.DB_URL)
var app = express();

const cors = require('cors');
app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter)



//Rota para curso1
const curso1 = require('./routes/curso1')
app.use('/api/curso1', curso1)

//Rota para mestre
const mestre = require('./routes/mestre')
app.use('/api/mestre', mestre)

//Rota para eixo
const eixo = require('./routes/eixo')
app.use('/api/eixo', eixo)

//Rota para atividade
const atividade = require('./routes/atividade')
app.use('/api/atividade', atividade)

//Rota para aluno
const aluno1 = require('./routes/aluno1')
app.use('/api/aluno1', aluno1)

//Rota para calendario
const calendario = require('./routes/calendario');
app.use('/api/calendario', calendario)

//Rota para equipe
const equipe = require('./routes/equipe')
app.use('/api/equipe', equipe)

//Rota para grade
const grade = require('./routes/grade')
app.use('/api/grade', grade)



// Rota para sala-aula
const sala_aula1 = require('./routes/sala_aula1')
app.use('/api/sala-aula1', sala_aula1)



// Rota para atividade-eixo
const atividade_eixo = require('./routes/atividade_eixo')
app.use('/api/atividade-eixo', atividade_eixo)

// Rota para curso-eixo
const curso_eixo = require('./routes/curso_eixo')
app.use('/api/curso-eixo', curso_eixo)



module.exports = app;
